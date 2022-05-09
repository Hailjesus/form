
import React, { useState } from 'react';

function Practice (){
  const [formValues,setFormvalues]= useState({
    username:"",
    email:"",
    password:""
  });

  const handleChange = (e) =>{
  console.log(e.target.value);
  setFormvalues({...formValues,name:e.target.value});
  console.log(formValues);


  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormvalues({formValues,name:e.target.value});
    // console.log(formValues);
  };

    return (
        
          <form>
         <label>username</label>
          <div>
         <input type="text" name="username"
         placeholder="username" 
         values={ formValues.username} onChange={handleChange}/></div>
                    
          <label>Email</label>
         <div> <input 
          type="text" 
          name="email" 
          placeholder="Email"
          values={ formValues.email} onChange={handleChange}/> </div>
                  
          <label>Password</label>
          <div>
          <input 
          type="text" 
          name="password" 
          placeholder="Password"
          values={ formValues.password} onChange={handleChange}/> </div>
          <button onClick={handleSubmit}>submit</button>
          </form>
     
      );
};

export default Practice;