import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './Screens/Signup/Signup';
import Login from './Screens/Login/Login';
import Dashboard from './Screens/Dashboard/Dashboard';
import Product from './Screens/Product/Product.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;

