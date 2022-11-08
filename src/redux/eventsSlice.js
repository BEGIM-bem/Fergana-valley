import { createSlice } from '@reduxjs/toolkit'
import { getEvents, getEventsId } from '../api/events';




const eventsSlice = createSlice({
    name: 'events',
    initialState: {
        allEvents: [],
        idEvents: {},
        status: {
            getEventStatus: null,
            getEventIdStatus: null
        },
        error: {
            getEventsErrors: null,
            getEventsIdErrors: null,

        }
    },

    extraReducers: {

        // get Events and News
        [getEvents.pending]: (state, action) => {
            state.status.getEventStatus = 'Gettining event';
            state.error.createEventError = null
        },

        [getEvents.fulfilled]: (state, action) => {
            console.log("action.payload: ", action.payload)
            state.status.getEventStatus = 'Geted event';
            state.allEvents = action.payload
        },

        [getEvents.rejected]: (state, action) => {
            state.status.getEventStatus = 'Rejected geted event';
            state.error.getEventError = action.payload
        },

        //get events ID
        [getEventsId.pending]: (state, action) => {
            state.status.getEventIdStatus = 'Gettining id event';
            state.error.getEventsIdErrors = null
        },

        [getEventsId.fulfilled]: (state, action) => {

            state.status.getEventIdStatus = 'Geted id event';
            state.idEvents = action.payload
        },

        [getEventsId.rejected]: (state, action) => {
            state.status.getEventIdStatus = 'Rejected geted  id event';
            state.error.getEventsIdErrors = action.payload
        },



    }

})


export default eventsSlice.reducer