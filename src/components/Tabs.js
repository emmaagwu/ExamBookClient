import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Tabs = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-4">
        <button 
          onClick={() => setIsLogin(true)}
          className={`px-4 py-2 rounded-md ${isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Login
        </button>
        <button 
          onClick={() => setIsLogin(false)}
          className={`px-4 py-2 rounded-md ${!isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Sign Up
        </button>
      </div>
      <div>
        {isLogin ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
};

export default Tabs;
