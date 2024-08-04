import React, { useState } from 'react';
import style from './Login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    if (loggedUser && loggedUser.username === input.username && loggedUser.password === input.password) {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className={style.page}>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin} className={style.form}>
        <label htmlFor="username">Username</label>
        <br />
        <input
          name="username"
          value={input.username}
          onChange={handleChange}
          type="text"
          placeholder="Username"
          required
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          name="password"
          value={input.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

