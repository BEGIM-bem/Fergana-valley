import { configureStore } from '@reduxjs/toolkit'
import contactsSlice from './contactsSlice'
import eventsSlice from './eventsSlice'
import {localizationSlice} from "./localizationSlice";
import {courseSlice} from "./coursesSlice";
import {userSlice} from "./usersSlice";



export default configureStore({
    reducer: {
        events: eventsSlice,
        contacts: contactsSlice,
        localization: localizationSlice,
        course: courseSlice,
        users: userSlice,
    },
})

