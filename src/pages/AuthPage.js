import React from 'react';
import AuthNavbar from '../components/AuthNavbar';
import Tabs from '../components/Tabs';
import Footer from '../components/Footer';

const AuthPage = () => {
  return (
    <div>
      <AuthNavbar />
      <div className="min-h-screen flex flex-col justify-center bg-gray-100">
        <Tabs />
      </div>
      <Footer />
    </div>
  );
};

export default AuthPage;
