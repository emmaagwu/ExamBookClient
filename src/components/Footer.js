import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white py-16">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2024 ExamBook. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://twitter.com" className="hover:underline">Twitter</a>
          <a href="https://linkedin.com" className="hover:underline">LinkedIn</a>
        </div>
        <p className="mt-4">Built with passion for online learning.</p>
      </div>
    </footer>
  );
};

export default Footer;
