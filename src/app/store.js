import { configureStore } from '@reduxjs/toolkit'
import phonebookReducer from '../features/contacts/phonebookSlice'

export default configureStore({
  reducer: {
    phonebook: phonebookReducer,
  }
})