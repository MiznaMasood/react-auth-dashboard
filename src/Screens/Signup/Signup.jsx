import React, { useState } from 'react';
import style from './Signup.module.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(input));
    navigate('/login');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className={style.form}>
        <label>
          Full Name:
          <br />
          <input
            name="fullName"
            value={input.fullName}
            onChange={handleChange}
            type="text"
            required
          />
        </label>
        <br />
        <label>
          Username:
          <br />
          <input
            name="username"
            value={input.username}
            onChange={handleChange}
            type="text"
            required
          />
        </label>
        <br />
        <label>
          Email Address:
          <br />
          <input
            name="email"
            value={input.email}
            onChange={handleChange}
            type="email"
            required
          />
        </label>
        <br />
        <label>
          Password:
          <br />
          <input
            name="password"
            value={input.password}
            onChange={handleChange}
            type="password"
            required
          />
        </label>
        <br />
        <button className={style.button} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;

