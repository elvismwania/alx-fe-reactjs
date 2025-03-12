// src/components/ProtectedRoute.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Import useAuth

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // Use useAuth

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoute;
