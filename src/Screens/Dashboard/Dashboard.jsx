import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Dashboard.module.css';

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUserDetails(user);
    }
  }, []);

  return (
    <div className={style.dashboard}>
      <nav className={style.navbar}>
        <h1>My App</h1>
        <div>
          <Link to="/">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
      <header className={style.dashboardHeader}>
        <h1>Welcome to Your Dashboard</h1>
      </header>
      <main className={style.dashboardMain}>
        {userDetails ? (
          <div className={style.userDetails}>
            <h2>User Details</h2>
            <p><strong>Full Name:</strong> {userDetails.fullName}</p>
            <p><strong>Username:</strong> {userDetails.username}</p>
            <p><strong>Email:</strong> {userDetails.email}</p>
            <p><strong>Password:</strong> {userDetails.password}</p>
          </div>
        ) : (
          <p>No user details found. Please sign up or log in.</p>
        )}
      </main>
      <footer className={style.dashboardFooter}>
        <p>&copy; 2024 My App</p>
      </footer>
    </div>
  );
}

export default Dashboard;


