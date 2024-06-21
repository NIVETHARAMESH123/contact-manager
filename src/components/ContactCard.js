import React from 'react'
import user from "../images/reactProfile.jpg"

const ContactCard = ({contact, clickHandle}) => {
    const {id,name, email}=contact;
  return (
    <div className = "item">
        <img className="ui avatar image" src={user} alt="reactProfile" />
    <div className="content">
        <div className="harder">{name}</div>
        <div>{email}</div>
        </div>
        <i id="trash"  className="trash alternate outline icon" style={{color:"red", marginTop:"7px"}} 
        onClick={(e)=> clickHandle(id)}
        ></i>
        
    </div>
  )
}

export default ContactCard