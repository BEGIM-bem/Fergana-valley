import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getCourse} from "../api/course";
// import {authUser, getUser} from "../api/user";
import API from "../utils/axiosConfig";
import {setCookie} from "../utils/Cookies";
import {getFounders} from "../api/user";

const initialState = {
    loading: false,
    users: [],
    founders: [],
}

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const response = await API.get('users/');
            return response.data
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
    extraReducers: {
        [getUsers.pending]: (state) => {
            state.loading = true;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.loading = false
            state.users = action.payload
        },
        [getUsers.rejected]: (state) => {
            state.loading = false
        },
        [getFounders.pending]: (state) => {
            state.loading = true;
        },
        [getFounders.fulfilled]: (state, action) => {
            state.loading = false
            state.founders = action.payload
        },
        [getFounders.rejected]: (state) => {
            state.loading = false
        },
    },
})

export const { getUserId } = usersSlice.actions;
export const userSlice = usersSlice.reducer;

