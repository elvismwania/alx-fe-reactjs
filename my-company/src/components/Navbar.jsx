import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
      <ul style={{ 
        listStyle: 'none', 
        margin: 0, 
        padding: 0, 
        display: 'flex', 
        gap: '20px',
        justifyContent: 'space-around' // Add this line!
      }}>
        <li><Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Link></li>
        <li><Link to="/about" style={{ textDecoration: 'none', color: '#333' }}>About</Link></li>
        <li><Link to="/services" style={{ textDecoration: 'none', color: '#333' }}>Services</Link></li>
        <li><Link to="/contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
