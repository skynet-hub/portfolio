import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-r from-gray-900 to-indigo-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        <p className="text-gray-300">
          © {currentYear} <span className="text-indigo-400 font-semibold">MagoboDevs</span>. All rights reserved.
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;