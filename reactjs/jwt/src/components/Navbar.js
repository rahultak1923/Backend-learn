import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const isLoggedIn = !!localStorage.getItem("token");

    const [user, setUser]=useState(null)
    useEffect(()=>{
      const token = localStorage.getItem("token");
      if(token){
        fetch("http://localhost:8000/user/getuser",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
            "auth-token":token
          }
          })
          .then(res => res.json())
          .then(data => setUser(data))
          .catch(err => console.error("Error fetching user:", err))
        }
    },[]);

    const handleLogout = ()=> {
        localStorage.removeItem("token");
        window.location.href = "/login"
    }
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/dashboard">Dashboard</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
    {isLoggedIn && user && (
      <span className='navbar-text me-3'>
       👤 ({user.email})
      </span>
    )}

        {!isLoggedIn ? (<>
            <Link class="btn btn-success mx-1" to="/login">Login</Link>
            <Link class="btn btn-primary mx-1" to="/register">Register</Link>
        </>):(<>
            <button class="btn btn-danger mx-1" onClick={handleLogout}>Logout</button>
        
        </>)}
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        {/* <button class="btn btn-success mx-1" type="submit">Login</button>
        <button class="btn btn-primary mx-1" type="submit">Register</button> */}
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
