// import { nanoid } from "nanoid";
import "./App.css";
import React, { useState } from "react";
import Contacts from "./components/Contacts/Contacts";
import Filter from "./components/Filter/Filter";
import ContactForm from "./components/ContactForm/ContactForm";
// import { Debounce } from "react-lodash";
import { save, load } from "./features/localStorage/localStorage";
import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";

function App() {
  const filteredContacts = useSelector(state => state.phonebook.filteredContacts)
  // const [contactFilter, setContactFilter] = useState("");
  // const contactsList = useSelector(state => state.phonebook.contacts)
  // let filteredContacts = dynamicSearch()

  // const filteredContacts = dynamicSearch(contactFilter, contactsList)

  // function dynamicSearch() {
  //   console.log('filter: ', contactFilter)
  // return contactsList.filter(contact => contact.name.toLowerCase().includes(contactFilter.toLowerCase()))
  // }
  
  //     const dynamicSearch = () => {
  //   if (!contactsList) return;
  //   return contactsList.filter((contact) =>
  //     contact.name.toLowerCase().includes(contactFilter.toLowerCase())
  //   );
  // };



  // const contacts = useSelector((state)=> state.contacts.value)


  //take contacts to variable from store with useSelector

  //dispatch contacts from localStorage with actionCreator






  // const storedContacts = load("Contacts");
  // console.log("storedContacts: ",storedContacts);


  // useEffect(() => {
    // if (!storedContacts) { return };
    //take contacts from storage
  // }, []);

  // const handleContactFilter = (event) => {
  //   setContactFilter(event.target.value);
  // };

  // const dynamicSearch = () => {
  //   if (!contactsList) return;
  //   return contactsList.filter((contact) =>
  //     contact.name.toLowerCase().includes(contactFilter.toLowerCase())
  //   );
  // };

  // const removeContact = (contact) => {
  //   setContactsList(contactsList.filter((c) => c.id !== contact.id));
  //   save(
  //     "Contacts",
  //     contactsList.filter((c) => c.id !== contact.id)
  //   );
  // };

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
