import { createSlice } from '@reduxjs/toolkit'
import { getAdress, getLinkSocialNetwork } from '../api/contacts';
import { getEvents, getEventsId } from '../api/events';




const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        LinkSocialNetwork: [],
        status: {
            getContactsStatus: null,
            getSocialNetworkStatus: null

        },
        error: {
            getContactsErrors: null,
            getSocialNetworkErrors: null

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


        // get  LinkSocialNetwork
        [getLinkSocialNetwork.pending]: (state, action) => {
            state.status.getSocialNetworkStatus = 'Gettining LinkSocialNetwork';
            state.error.getSocialNetworkErrors = null
        },

        [getLinkSocialNetwork.fulfilled]: (state, action) => {
            state.status.getSocialNetworkStatus = 'Geted LinkSocialNetwork';
            state.LinkSocialNetwork = action.payload
        },


        [getLinkSocialNetwork.rejected]: (state, action) => {
            state.status.getSocialNetworkStatus = 'Rejected geted LinkSocialNetwork';
            state.error.getSocialNetworkErrors = action.payload
        },

    }
})


export default contactsSlice.reducer