import { createSlice } from '@reduxjs/toolkit'
import { getAdress } from '../api/contacts';
import { getEvents, getEventsId } from '../api/events';




const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        status: {
            getContactsStatus: null,

        },
        error: {
            getContactsErrors: null,

        }
    },

    extraReducers: {

        // get Contacts
        [getAdress.pending]: (state, action) => {
            state.status.getContactsStatus = 'Gettining contacts';
            state.error.getContactsErrors = null
        },

        [getAdress.fulfilled]: (state, action) => {
            state.status.getContactsStatus = 'Geted contacts';
            state.contacts = action.payload
        },


        [getAdress.rejected]: (state, action) => {
            state.status.getContactsStatus = 'Rejected geted contacts';
            state.error.getContactsErrors = action.payload
        },

    }
})


export default contactsSlice.reducer