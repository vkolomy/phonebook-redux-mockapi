import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { URL} from '../mockAPI/mockAPI'

export const fetchAllContacts = createAsyncThunk(
  'phonebook/fetchAllContacts',
  async () => {
        try {
        const response = await fetch(`${URL}/contacts`, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
          console.log('contacts: ',json);
          return json;
    } catch (error) {
        console.error(error.message)
    }
  },
)

export const removeContact = createAsyncThunk(
  'phonebook/removeContact',
  async (contact) => {
    try {
      const response = await fetch(`${URL}/contacts/${contact.id}`, {
        method: 'Delete',
        headers: { 'content-type': 'application/json' },
      })
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      console.log('contact removed: ', json)
      return json;
    } catch (error) {
        console.error(error.message)
    }
  }
)

export const addContact = createAsyncThunk(
  'phonebook/addContact',
  async (newContact) => {
    try {
      const response = await fetch(`${URL}/contacts`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newContact)
      })
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      console.log('contact added: ', json)
      return json;
    } catch (error) {
        console.error(error.message)
    }
  }
)

const initialState = {
  contacts: [],
  filteredContacts: [],
  searchQuary: '',
}

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    dynamicSearch: (state, action) => {
      if (state.searchQuary !== '') {
        state.filteredContacts = state.contacts.filter(contact => contact.name.toLowerCase().includes(action.payload.toLowerCase()))
      } else {
        state.filteredContacts = state.contacts;
      }
    },

  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllContacts.fulfilled, (state, action) => {
      state.contacts = action.payload;
    })

    builder.addCase(removeContact.fulfilled, (state, action) => {
      state.contacts = state.contacts.filter((c) => c.id !== action.payload.id)
    })
      
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.contacts = [...state.contacts, action.payload]
    })    
  }
})

export const {dynamicSearch} = phonebookSlice.actions

export default phonebookSlice.reducer