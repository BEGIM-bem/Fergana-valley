import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import {requests} from "../api";

const initialState = {
    loading: false,
    clubs: [],
    club: {},
}

export const getCourse = createAsyncThunk(
    'clubs/getClubs',
    async () => {
        const response = await requests.getClubsApi();
        return response.data;
    }
);

export const getClub = createAsyncThunk(
    'clubs/getClub',
    async (id) => {
        const response = await requests.getClubApi(id);
        console.log("club: ", response.data)
        return response.data;
    }
);

export const createClub = createAsyncThunk(
    'clubs/createClub',
    async (data) => {
        const response = await requests.postClubApi(data);
        console.log("new_club: ", response.data)
        setTimeout(() => data.navigate("/main/clubs/all_clubs"), 1500)
        data.handleOpenSuccessModal()
        return response.data;
    }
);

export const editClub = createAsyncThunk(
    'clubs/editClub',
    async (data) => {
        const response = await requests.editClubApi(data);
        console.log("edited_club: ", response.data)
        setTimeout(() => data.navigate("/main/clubs/all_clubs"), 1500)
        data.handleOpenSuccessModal()
        return response.data;
    }
);

export const deleteClub = createAsyncThunk(

    'clubs/deleteClub',
    async (id) => {
        const response = await requests.deleteClubApi(id);
        console.log("deleted_doc: ", response.data)
        return response.data;
    }
);

const clubSlice = createSlice({
    name: 'clubs',
    initialState,
    reducers: {
        postDoc: (state, {payload}) => {
            state.docs.push(payload)
        }
    },
    extraReducers: {
        [getClubs.pending]: (state) => {
            state.loading = true;
        },
        [getClubs.fulfilled]: (state, action) => {
            state.loading = false
            state.clubs = action.payload
        },
        [getClubs.rejected]: (state) => {
            state.loading = false
        },
        [getClub.pending]: (state) => {
            state.loading = true;
        },
        [getClub.fulfilled]: (state, action) => {
            state.loading = false
            state.club = action.payload
        },
        [getClub.rejected]: (state) => {
            state.loading = false
        },
    },
})

export const clubsSlice = clubSlice.reducer;

