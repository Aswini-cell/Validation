import React, { useState } from "react";


function Dashboard(){
  const[email, setEmail]=useState('')
  const[password, setPassword]=useState('')
  const[errors,setErrors]=useState({email:'',password:''})
 
  const handleSubmit=(e)=>{
  e.preventDefault();
  const newErrors ={email:'', password:''};
    let valid=true;
    if(email===""){
      newErrors.email='Email is required';
      valid =false;
    }
    if(password===""){
      newErrors.email='Password is required';
      valid =false;
    }
    else if (password.length<6){
      newErrors.password='password must be at least 6 characters long';
      valid=false;
    
    }
    setErrors(newErrors);
    if(valid){
     
      console.log('Form submited successfully');
   
      }
    };
   
  return(
    <form onSubmit={handleSubmit}>
    <div>
     <label>Email:</label>
     <input
      type="email" 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      required
      />
    </div>
    <div>
     <label>password:</label>
     <input type="password"value={password}
      onChange={(e)=>setPassword(e.target.value)}
     required
     />
    </div>
    <button type='submit'>submit</button>
    
    </form>
  )
}

export default Dashboard;