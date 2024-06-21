import React from 'react'
import {useState} from 'react'
const AddContact = ({addContactHandler}) => {
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const handleSubmit=(e)=>{
         e.preventDefault();
         if(name === "" || email === ""){
            alert("All this are mandatory fields , please enter all details")
            return ;
         }

         addContactHandler({name,email})
         setName("")
         setEmail("")
         
         
    }
  return (
    <div className = "ui main">
                <h2>Add Contact</h2>
                 <form className = "ui form" onSubmit={handleSubmit}>
                 <div className = "field">
                  <label>Name</label>
                        <input type="text" name="name" placeholder = "Name" value={name} onChange={(e) =>setName(e.target.value)}/>
                    </div>
                    <div className = "field">
                        <label>Mail</label>
                        <input type="text" name="name" placeholder = "mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <button className = "ui button blue">Add</button>
                </form>
            </div>
  )
}

export default AddContact







// import React from 'react';
// class AddContact extends React.Component{
// render(){
//     return(
//         <div className = "ui main">
//             <h2>Add Contact</h2>
//             <form className = "ui form">
//                 <div className = "field">
//                     <label>Name</label>
//                     <input type="text" name="name" placeholder = "Name" /><input/>
//                 </div>
//                 <div className = "field">
//                     <label>Mail</label>
//                     <input type="text" name="name" placeholder = "mail" /><input/>
//                 </div>
//                 <button className = "ui button blue">Add</button>
//             </form>
//         </div>
//     );
// }
// }
// export default AddContact; 