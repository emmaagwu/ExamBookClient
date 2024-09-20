import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">ExamBook</h1>
        <ul className="flex space-x-4">
          <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="how-it-works" smooth={true} duration={500}>How It Works</Link></li>
          <li><Link to="features" smooth={true} duration={500}>Features</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
