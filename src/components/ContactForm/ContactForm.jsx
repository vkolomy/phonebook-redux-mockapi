import React from 'react'
import { nanoid } from "nanoid";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../features/contacts/phonebookSlice';

const ContactForm = () => {
  const contacts = useSelector(state => state.phonebook.contacts)
  const formState = {
    name: "",
    number: "",
  }

  const [contactName, setContactName] = useState(formState.name);
  const [contactPhone, setContactPhone] = useState(formState.number);

  const dispatch = useDispatch()


  const addNewContact = (event) => {
    event.preventDefault();

    if (contacts) {
      const isNameExist = contacts.map((e) => e.name === contactName);
      if (isNameExist.includes(true)) {
        return alert(`${contactName} is already exist`);
      }
    }

    const contactId = nanoid();
    const newContact = {
      name: contactName,
      id: contactId,
      phone: contactPhone,
    };

    dispatch(addContact(newContact))
    setContactName("");
    setContactPhone("");
  };

  return (
    <form style={{ marginLeft: "15px" }}>
      <label style={{ display: "flex", flexDirection: "column", fontSize: "26px", color: "teal" }}>
        Name
        <input
          type="text"
          name="name"
          style={{ maxWidth: "300px", padding: "5px", fontSize: "20px", borderRadius: "5px" }}
          onChange={(e) => setContactName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={contactName}
          required
        />
      </label>
      <br />
      <label style={{ display: "flex", flexDirection: "column", fontSize: "26px", color: "teal" }}>
        Number
        <input
          type="tel"
          name="phone"
          style={{ maxWidth: "300px", padding: "5px", fontSize: "20px", borderRadius: "5px" }}
          onChange={(e) => setContactPhone(e.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={contactPhone}
          required
        />
      </label>
      <br />
      <button type="submit" onClick={addNewContact} style={{ maxWidth: "250px", maxHeight: "50px", padding: "10px", color: "white", backgroundColor: "teal", fontSize: "22px", borderRadius: "5px" }}>
        Add contact
      </button>
    </form>
  )
}

export default ContactForm;
