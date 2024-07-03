import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {dynamicSearch} from "../../features/contacts/phonebookSlice"

const Filter = (props) => {
  const contacts = useSelector(state => state.phonebook.contacts)
  const [contactFilter, setContactFilter] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(dynamicSearch(contactFilter))
  },[contactFilter,contacts]);


  return (
    <div style={{marginLeft:"15px"}}>
      <p style={{fontSize:"24px", color:"teal"}}>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        style={{maxWidth:"300px", padding:"5px", fontSize:"20px", borderRadius:"5px"}}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={contactFilter}
        onChange={event => setContactFilter(event.target.value)}
      />
    </div>
          
  )
}

export default Filter;
