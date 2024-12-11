import React, { useState } from'react'



function Login(){
   const[name,setName]=useState('')
    const handleSubmit=()=>{if(name ===''){
      alert('please enter your name') 
    } 
    }
return(
  <div>
      <form onSubmit={handleSubmit}>
      <label>Enter your name:</label>
      <input type="number"/>
      <button type ="submit">submit</button>
      </form>
  </div>
)
    
}
export default Login;