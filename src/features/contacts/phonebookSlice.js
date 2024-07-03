import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  contacts: [
    { id: "dfgaert453f", name: "Rosie Simpson", number: "459-12-56" },
    { id: "ise54es6tsg", name: "Hermione Kline", number: "443-89-12" },
    { id: "gfdgs56rgdf", name: "Eden Clements", number: "645-17-79" },
    { id: "65fdg7dfgdf", name: "Annie Copeland", number: "227-91-26" },
  ],
  filteredContacts: [],
}

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addContact: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.contacts = [...state.contacts, action.payload]
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter((c) => c.id !== action.payload.id)
    },
    dynamicSearch: (state, action) => {
      if (state.searchQuerry !== '') {
        state.filteredContacts = state.contacts.filter(contact => contact.name.toLowerCase().includes(action.payload.toLowerCase()))
      } else {
        state.filteredContacts = state.contacts;
      }
    },

    // dynamicSearch(state, action) {
    //   console.log("action dynamic search: ", action)
    //     if (action.payload === '') {
    //     state.filteredContacts = state.contacts
    //     } else if (action.payload === '' && ) {
    //       state.filteredContacts = state.contacts.filter(contact => contact.name.toLowerCase().includes(action.payload.toLowerCase()))
    //   }            
  //  },
    
    // dynamicSearch(state, action) {
    //   console.log("action payload search: " ,action.payload)
    //   state.contacts = state.contacts.filter(contact => contact.name.toLowerCase().includes(action.payload.toLowerCase()))
    // },

      // const dynamicSearch = () => {
  //   if (!contactsList) return;
  //   return contactsList.filter((contact) =>
  //     contact.name.toLowerCase().includes(contactFilter.toLowerCase())
  //   );
  // };
    
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // }
  }
})

// Action creators are generated for each case reducer function
export const { addContact, removeContact, dynamicSearch} = phonebookSlice.actions

export default phonebookSlice.reducer