import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    language: 'russian' | 'kyrgyz' | "o'zbekcha",
}

const localizationLangSlice = createSlice({
    name: 'clubs',
    initialState,
    reducers: {
        changeLang: (state, action) => {
            state.language = action.payload
        }
    },
})

export const { changeLang } = localizationLangSlice.actions
export const localizationSlice = localizationLangSlice.reducer;
