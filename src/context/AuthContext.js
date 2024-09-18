// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const AuthContext = createContext();

// AuthProvider component to wrap around the app
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const adminStatus = localStorage.getItem('is_admin');

    if (token) {
      setIsAuthenticated(true);
      setIsAdmin(adminStatus === 'true');
    }
  }, []);

  // Log out function
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('is_admin');
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
