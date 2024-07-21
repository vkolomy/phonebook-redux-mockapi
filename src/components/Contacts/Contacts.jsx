import React from 'react'
import ContactItem from '../ContactItem/ContactItem';

const Contacts = (props) => {
    return <ul>{props.contacts.map(contact =>
      <ContactItem key={contact.id} contact={contact} />)}
    </ul>
}

export default Contacts;
