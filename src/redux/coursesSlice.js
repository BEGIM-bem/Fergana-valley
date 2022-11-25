import { createSlice } from '@reduxjs/toolkit';
import {getAddress, getComments, getCourse} from "../api/course";

const initialState = {
    loading: false,
    course: [],
    comments: [],
    address: []
}

const coursesSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {},
    extraReducers: {
        [getCourse.pending]: (state) => {
            state.loading = true;
        },
        [getCourse.fulfilled]: (state, action) => {
            state.loading = false
            state.course = action.payload
        },
        [getCourse.rejected]: (state) => {
            state.loading = false
        },
        [getAddress.pending]: (state) => {
            state.loading = true;
        },
        [getAddress.fulfilled]: (state, action) => {
            state.loading = false
            state.address = action.payload
        },
        [getAddress.rejected]: (state) => {
            state.loading = false
        },
        [getComments.pending]: (state) => {
            state.loading = true;
        },
        [getComments.fulfilled]: (state, action) => {
            state.loading = false
            state.comments = action.payload
        },
        [getComments.rejected]: (state) => {
            state.loading = false
        },
    },

})

export const courseSlice = coursesSlice.reducer;

