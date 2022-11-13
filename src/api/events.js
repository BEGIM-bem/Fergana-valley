import { createAsyncThunk } from '@reduxjs/toolkit'
import API from '../utils/axiosConfig';
import { newsImage1, newsImage2 } from '../images/index.js'
import axios from 'axios'




export const getEvents = createAsyncThunk(
    'events/getEvents',
    async (_, { rejectWithValue }) => {
        try {
            const response = await API.get('new/');
            return response.data
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)


export const getEventsId = createAsyncThunk(
    'news/getEventsId',

    async function (id, { rejectWithValue }) {
        try {

            const response = await API.get(`new/${id}/`)
            return response.data
        }
        catch (error) {
            return rejectWithValue(error.message)
        }

    })