import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    language: 'russian',
}

const localizationLangSlice = createSlice({
    name: 'localization',
    initialState,
    reducers: {
        changeLang: (state, action) => {
            state.language = action.payload
        }
    },
})

export const { changeLang } = localizationLangSlice.actions
export const localizationSlice = localizationLangSlice.reducer;

