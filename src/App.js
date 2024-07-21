// import { nanoid } from "nanoid";
import "./App.css";
import React from "react";
import Contacts from "./components/Contacts/Contacts";
import Filter from "./components/Filter/Filter";
import ContactForm from "./components/ContactForm/ContactForm";
// import { Debounce } from "react-lodash";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllContacts } from "./features/contacts/phonebookSlice";

import { useEffect } from "react";

function App() {
  const filteredContacts = useSelector(state => state.phonebook.filteredContacts)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchAllContacts())
    },[])

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "teal", fontSize: "48px" }}>
        Phonebook
      </h1>
      <ContactForm />
      <h2 style={{ color: "teal", fontSize: "40px", marginLeft: "15px" }}>
        Contacts
      </h2>
      <Filter />
      <Contacts contacts={filteredContacts}/>
    </div>
  );
}

export default App;
