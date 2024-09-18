import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/images/hero1.jpg';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="hero" className="hero-section h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-white mb-6 text-center">Welcome to ExamBook</h1>
        <p className="text-xl text-white mb-6 text-center">The ultimate platform for setting and taking exams online</p>
        <button
          className="bg-white text-indigo-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-200"
          onClick={() => navigate('/auth')}
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
