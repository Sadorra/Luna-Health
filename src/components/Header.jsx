// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white py-4 px-8 flex items-center justify-between">
      <Link to="/" className="flex items-center">
        
        <svg
          className="h-10 w-10 mr-2 text-pink-400" 
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4C7.53 4 4 7.53 4 12s3.53 8 8 8 8-3.53 8-8-3.53-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"
          />
        </svg>
        <div className="text-3xl  text-gray-800 font-extrabold">Fema</div>
      </Link>
      <nav className="space-x-6">
        <Link
          to="#what-is-fema"
          className="bg-pink-100 hover:bg-pink-200 text-pink-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="bg-pink-100 hover:bg-pink-200 text-pink-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Contact
        </Link>
        <Link
          to="/login"
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign in
        </Link>
      </nav>
    </header>
  );
}

export default Header;

