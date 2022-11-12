import { configureStore } from '@reduxjs/toolkit'
import contactsSlice from './contactsSlice'
import eventsSlice from './eventsSlice'
import { localizationSlice } from "./localizationSlice";



export default configureStore({
    reducer: {
        events: eventsSlice,
        contacts: contactsSlice,
        localization: localizationSlice,
    },
})

