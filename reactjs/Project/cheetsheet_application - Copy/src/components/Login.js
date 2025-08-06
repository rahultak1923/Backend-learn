import React, { useState } from 'react';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/user/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });

    const json = await response.json();
    if (json.authtoken) {
      localStorage.setItem('token', json.authtoken);
      alert("Login successful!");
      window.location.href = "/dashboard";
    } else {
      alert("Invalid login");
    }
  };

  const onChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="email" name="email" placeholder="Email" onChange={onChange} required />
      <input type="password" name="password" placeholder="Password" onChange={onChange} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
