// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import useAuth from './hooks/useAuth'; // Import useAuth

function App() {
  const { login, logout, isAuthenticated } = useAuth(); // Use useAuth

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/blog/1">Blog Post 1</a></li>
            <li><a href="/blog/2">Blog Post 2</a></li>
          </ul>
          {isAuthenticated ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <button onClick={() => {}}> </button>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/*" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/login" element={<Login onLogin={login} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
