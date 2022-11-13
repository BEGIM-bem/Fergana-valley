import { createSlice } from '@reduxjs/toolkit';
import {getCourse} from "../api/course";
import {authUser} from "../api/user";

const initialState = {
    loading: false
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
    // extraReducers: {
    //     [authUser.pending]: (state) => {
    //         state.loading = true;
    //     },
    //     [authUser.fulfilled]: (state, action) => {
    //         state.loading = false
    //         state.course = action.payload
    //     },
    //     [authUser.rejected]: (state) => {
    //         state.loading = false
    //     },
    // },
})

export const { getUserId } = usersSlice.actions
export const userSlice = usersSlice.reducer;

