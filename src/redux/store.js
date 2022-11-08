import { configureStore } from '@reduxjs/toolkit'
import contactsSlice from './contactsSlice'
import eventsSlice from './eventsSlice'



export default configureStore({
    reducer: {
        events: eventsSlice,
        contacts: contactsSlice
    },
})

