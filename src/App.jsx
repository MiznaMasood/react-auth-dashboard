import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Signup from './Screens/Signup/Signup';
import Login from './Screens/Login/Login';
import Dashboard from './Screens/Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route exact path="/" element={<Signup />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
    </Routes>

    </>
  )
}

export default App
