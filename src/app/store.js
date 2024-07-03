import { configureStore } from '@reduxjs/toolkit'
import phonebookReducer from '../features/contacts/phonebookSlice'
import contactsFilterReducer from '../features/contacts/contactsFilterSlice'

export default configureStore({
  reducer: {
    phonebook: phonebookReducer,
    contactsFilter: contactsFilterReducer,
  }
})