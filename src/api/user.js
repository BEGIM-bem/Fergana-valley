import {createAsyncThunk} from "@reduxjs/toolkit";
import API from "../utils/axiosConfig";
import {getCookie, setCookie} from "../utils/Cookies";
import {getCourse} from "./course";
import {setUserId} from "../redux/usersSlice";
// import {getUserId} from "../redux/usersSlice";


export const getUser = createAsyncThunk(
    'users/getUser',
    async (data, { rejectWithValue, dispatch }) => {
        try {
            const response = await API.get('users/');
            console.log("users: ", response)
             const user = await response.data.find(i => i.email === data.email)
            dispatch(setUserId(user.id))
            setCookie('userId', user.id, 1)
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)

export const createUser = createAsyncThunk(
    'users/createUser',
    async (data, { rejectWithValue }) => {
        try {
            await API.post('users/', {
                phone_number: `+996${data.datas.phone_number}`,
                whatsapp_number: `+996${data.datas.whatsapp_number}`,
                fullname: data.datas.fullname,
                email: data.datas.email,
                instagram: data.datas.instagram,
                password: data.datas.password
            });
            data.closeRegistrationModal()
            data.openAuthModal()
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)

export const authUser = createAsyncThunk(
    'users/authUser',
    async (data, { rejectWithValue, dispatch }) => {
        try {
            const response = await API.post('token/', data.datas);
            await setCookie("jwt-token", response.data.access, 3)
            await dispatch(getUser(data.datas))
            document.location.reload();
            dispatch(getCourse())
            data.closeAuth()
            data.alertSuccess()
            console.log("auth: ", response)
        } catch (e) {
            // alert('Incorrect password')
            data.alert()
            data.openRegist()
            return rejectWithValue(e.response.data.message);
        }
    }
)

export const getFounders = createAsyncThunk(
    'users/getFounders',
    async (data, { rejectWithValue }) => {
        try {
            const response = await API.get('founders/');
            return response.data
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)


export const getPartners = createAsyncThunk(
    'users/getPartners',
    async (_, { rejectWithValue }) => {
        try {
            const response = await API.get('partners/');
            return response.data
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)
