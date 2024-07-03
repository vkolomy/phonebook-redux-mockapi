import React from 'react'
import { useDispatch } from 'react-redux'
import { removeContact } from '../../features/contacts/phonebookSlice'

const ContactItem = (props) => {
   const dispatch = useDispatch()
   // console.log("props: ",props)

   return (
    <li style={{listStyle:"none", marginBottom:"8px", fontSize:"20px"}}>
       {props.contact.name} : {props.contact.number}
       <button style={{padding:"5px", marginLeft:"10px", fontSize:"16px", color:"white", backgroundColor:"teal"}} onClick={() => dispatch(removeContact(props.contact))}>delete</button>
    </li>    
  )
}

export default ContactItem;
