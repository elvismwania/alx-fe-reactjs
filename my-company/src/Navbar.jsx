import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      backgroundColor: '#f0f0f0', 
      padding: '10px', 
      marginBottom: '20px',
      display: 'flex', // Use flexbox for layout niko
      justifyContent: 'space-between', // Distribute space between items of each othergit remote -v
      alignItems: 'center' // Vertically align items
    }}>
      <div style={{marginLeft: '20px'}}> {/* Add some spacing to the left */}
      <span style={{fontWeight: 'bold'}}>My Company</span> {/* Example company name/logo */}
      </div>
      <ul style={{ 
        listStyle: 'none', 
        margin: 0, 
        padding: 0, 
        display: 'flex', 
        justifyContent: 'space-around',
        marginRight: '20px' // Add some spacing to the right
      }}>
        <li style={{ margin: '0 10px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#333', padding: '5px 10px', borderRadius: '5px' }}>Home</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/about" style={{ textDecoration: 'none', color: '#333', padding: '5px 10px', borderRadius: '5px' }}>About</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/services" style={{ textDecoration: 'none', color: '#333', padding: '5px 10px', borderRadius: '5px' }}>Services</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/contact" style={{ textDecoration: 'none', color: '#333', padding: '5px 10px', borderRadius: '5px' }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
