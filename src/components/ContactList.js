import React from 'react';
import ContactCard from './ContactCard';

const ContactList = ({contacts,removeContactId}  )  =>{
    const deleteHandler = (id)=>{
        removeContactId(id)
    }
    const renderContactList=contacts.map((contact) =>{
return (
   <ContactCard contact={contact} clickHandle={deleteHandler} key={contact.id}></ContactCard>
    
);
    });
    return (
<div className = "ui celled list"> {renderContactList}
</div>
    
)};

export default ContactList;