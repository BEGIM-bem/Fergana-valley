import {createAsyncThunk} from "@reduxjs/toolkit";
import API from "../utils/axiosConfig";
import {getCookie, setCookie} from "../utils/Cookies";
import {getCourse} from "./course";
import {getUserId} from "../redux/usersSlice";


export const getUser = createAsyncThunk(
    'user/getUser',
    async (data, { rejectWithValue, dispatch }) => {
        try {
            const response = await API.get('users/');
            console.log("users: ", response)
            const user = response.data.find(i => i.email === data.email)
            setCookie('userId', user.id, 1)
            // dispatch(getUserId(user.id))
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)

export const createUser = createAsyncThunk(
    'user/createUser',
    async (data, { rejectWithValue, dispatch }) => {
        try {
            const response = await API.post('users/', {
                phone_number: `+996${data.datas.phone_number}`,
                whatsapp_number: `+996${data.datas.whatsapp_number}`,
                fullname: data.datas.fullname,
                email: data.datas.email,
                instagram: data.datas.instagram,
                password: data.datas.password
            });
            console.log("regist:", response)
            data.closeRegistrationModal()
            dispatch(authUser(data.datas.email))
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)

export const authUser = createAsyncThunk(
    'user/authUser',
    async (data, { rejectWithValue, dispatch }) => {
        try {
            const response = await API.post('token/', data.datas);
            await setCookie("jwt-token", response.data.access, 3)
            dispatch(getUser(data.datas))
            dispatch(getCourse())
            data.closeAuth()
            console.log("auth: ", response)
        } catch (e) {
            data.closeAuth()
            data.openRegist()
            return rejectWithValue(e.response.data.message);
        }
    }
)
