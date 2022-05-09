import React from 'react'
import './design.css'
import {Link} from react-router-

function Design() {
    return ( < div className = "App" >
        <div className = 'h1' >
        <h1> STUDENT LOGIN </h1> 
         <form >    
             
                <label> FirstName </label> 
                 <input type = "text"  name = 'name' placeholder = "FirstName"/> <br/>
        <label> LastName </label> 
         <input type = "text" name = 'name'  placeholder = "Lastname"/> <br/>
        <label> DOB </label>  
        <input type = "date" name = 'name' placeholder = "DOB"/> <br/>
        <label > PhoneNumber </label> 
         <input type = "Number" name = 'name'  placeholder = "phonenumber"/> <br/>
        <label> PASSWORD </label> 
         <input type = "password" name = 'name' placeholder = "Password" required/> <br/>
        <button> Submit </button> 
         </form > 
         </div> 
          </div >
    )
}



export default Design;