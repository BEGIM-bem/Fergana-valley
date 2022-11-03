import { createAsyncThunk } from '@reduxjs/toolkit'
import API from '../utils/axiosConfig';
import { newsImage1, newsImage2 } from '../images/index.js'

let adress = [
    {
        id: 1,
        adress: 'Ленина 121',
        city: 'г.Ош, Кыргызстан',
        gmail: 'info@fergana.valley',
        telephon: '+996(779)119806'
    }
]



export const getAdress = createAsyncThunk(
    'contacts/getAdress',
    async (_, { rejectWithValue }) => {
        try {

            // const response = await API.get('/events');
            return adress
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)
