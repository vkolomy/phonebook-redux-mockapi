import React from 'react'
import ContactItem from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';

const Contacts = (props) => {
  //  console.log("Contacts props: ", props)
  //   if (!props.contacts) {
  //     return;
  // }
  //   console.log(useSelector((state) => state.phonebook.contacts
  // ));
  
  // const contacts = useSelector(state => state.phonebook.contacts)
    return <ul>{props.contacts.map(contact =>
      <ContactItem key={contact.id} contact={contact} />)}
    </ul>

}

export default Contacts;
