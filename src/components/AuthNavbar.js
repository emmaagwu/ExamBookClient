import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AuthNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <nav className="bg-indigo-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">YourApp</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white">Home</Link></li>
          <li>
            <button 
              onClick={handleLogout}
              className="bg-red-500 text-white py-2 px-4 rounded"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AuthNavbar;
