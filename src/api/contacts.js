import { createAsyncThunk } from '@reduxjs/toolkit'
import API from '../utils/axiosConfig';
import { newsImage1, newsImage2 } from '../images/index.js'


export const getAdress = createAsyncThunk(
    'contacts/getAdress',
    async (_, { rejectWithValue }) => {
        try {
            const response = await API.get('address/');
            return response.data
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)


export const getLinkSocialNetwork = createAsyncThunk(
    'contacts/getLinkSocialNetwork',
    async (_, { rejectWithValue }) => {
        try {
            const response = await API.get('socials/');
            return response.data
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)
