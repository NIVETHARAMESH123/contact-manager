import React, {useState, useEffect} from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import {Routes, Route} from 'react-router-dom';
function App() {
  const key="contacts"
  const [contacts, setContacts]=useState(()=>{return JSON.parse(localStorage.getItem(key)) || []} )

  const addContactHandler=(contact)=>{
    
    setContacts([...contacts,{id:uuid(),...contact}])
  }
  const removeContact=(id)=>{
    const newContactList=contacts.filter((contact)=>{
      return contact.id!==id;
    })
    setContacts(newContactList)
    
  }

  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(contacts));
  }, [contacts])


  return (
    <div>
      <Header />
      <div className ="ui container">
      <Routes>
        <Route path='/'element={<AddContact addContactHandler={addContactHandler}/>} />
        <Route path='/contact'element={ <ContactList contacts={contacts} removeContactId={removeContact}/>}/>
      </Routes>
      
      

      
    </div>
    </div>
  );
}

export default App;
