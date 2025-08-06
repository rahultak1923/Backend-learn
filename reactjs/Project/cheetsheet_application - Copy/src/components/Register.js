import React, { useState } from 'react';

const Register = () => {
  const [credentials, setCredentials] = useState({ username: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/user/add", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });

    const json = await response.json();
    if (json.authtoken) {
      localStorage.setItem('token', json.authtoken);
      alert("Registered successfully!");
      window.location.href = "/dashboard";
    } else {
      alert("Registration failed");
    }
  };

  const onChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={onChange} required />
        <input type="email" name="email" placeholder="Email" onChange={onChange} required />
        <input type="password" name="password" placeholder="Password" onChange={onChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
