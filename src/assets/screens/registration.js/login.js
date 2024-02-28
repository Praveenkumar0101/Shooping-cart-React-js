import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navi=useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // useEffect to retrieve registration data when component mounts
  useEffect(() => {
    const regUsername = localStorage.getItem("username");
    const regPassword = localStorage.getItem("password");

    // Check if registration data exists and populate state
    if (regUsername && regPassword) {
      setUsername(regUsername);
      setPassword(regPassword);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve the registration data from state
    const regUsername = localStorage.getItem("username");
    const regPassword = localStorage.getItem("password");

    // Check if the entered credentials match the registration data
    if (username === regUsername && password === regPassword) {
      alert("Login successful!");
navi('/shop')
    } else {
      alert("Invalid username or password. Please try again.");
    }
  }

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Login</h2>
      <form id="loginform" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <br />
        <button
          type="submit"
          style={{
            width: '100%',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            padding: '10px',
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;