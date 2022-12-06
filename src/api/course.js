import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../utils/axiosConfigTOKEN";

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

export const getComments = createAsyncThunk(
    'course/getComments',
    async (_, { rejectWithValue }) => {
        try {
            const response = await API.get('comments/');
            return response.data.reverse()
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)

export const sendComment = createAsyncThunk(
    'course/sendComment',
    async (data, { rejectWithValue, dispatch }) => {
        try {
            const response = await API.post('comments/', data.data);
            data.alert()
            dispatch(getComments())
            // return response.data
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)

export const getAddress = createAsyncThunk(
    'course/getAddress',
    async (_, { rejectWithValue }) => {
        try {
            const response = await API.get('address/');
            return response.data
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)
