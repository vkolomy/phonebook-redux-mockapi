import React from 'react'
import { useDispatch } from 'react-redux'
import { removeContact } from '../../features/contacts/phonebookSlice'

const ContactItem = (props) => {
  const dispatch = useDispatch()
  const timeago = Date.now() - Date.parse(props.contact.createdAt)

  console.log(timeago)

  return (
    <li style={{ listStyle: "none", marginBottom: "8px", fontSize: "26px" }}>

      {props.contact.name} : {props.contact.phone}
      <button style={{ padding: "5px", marginLeft: "10px", marginRight: "10px", fontSize: "16px", color: "black", borderRadius: "50%", width: '35px', height: "35px"}} onClick={() => dispatch(removeContact(props.contact))}>X</button>
    </li>
  )
}

export default ContactItem;
