import { createSlice } from '@reduxjs/toolkit';
import {getCourse} from "../api/course";

const initialState = {
    loading: false,
    course: [],
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
    },
})

export const courseSlice = coursesSlice.reducer;

