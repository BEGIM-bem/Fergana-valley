import {createAsyncThunk} from "@reduxjs/toolkit";
import API from "../utils/axiosConfig";

export const getCourse = createAsyncThunk(
    'course/getCourse',
    async (_, { rejectWithValue }) => {
        try {
            const response = await API.get('course/');
            return response.data
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)

export const sendComment = createAsyncThunk(
    'course/sendComment',
    async (data, { rejectWithValue, dispatch }) => {
        try {
            const response = await API.post('comments/', data);
            dispatch(getCourse())
            return response.data
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)
