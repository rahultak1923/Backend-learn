import React, { useState } from 'react'

const Register = () => {
    const [credentials, setCredentials]= useState({username:"",email:"",password:""})

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:8000/user/add", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
          });

          const json = await response.json();
          if(json.authtoken){
            localStorage.setItem('token',json.authtoken);
            alert("Registered successfully!");
            window.location.href = "/dashboard"
          }else {
            alert("Registration failed");
          }
    }

    const onChange = (e)=> setCredentials({ ...credentials, [e.target.name]: e.target.value})
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input type="text" class="form-control" id="name" name='username' onChange={onChange} aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name='password' class="form-control" onChange={onChange} id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Register
