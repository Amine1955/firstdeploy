// Navbar.js
import React from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Masroofy</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add-transaction">Add Transaction</Link>
        <Link to="/transactions">Transaction List</Link>
        <Link to="/reports">Visual Reports</Link>
      </div>
    </nav>
  );
};

export default Navbar;
