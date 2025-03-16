// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

import doc5 from '../assets/doc5.jpg';

function HomePage() {
  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <div className="bg-pink-100 rounded-lg shadow-md p-6 flex items-center justify-between">
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold mb-2">What are You feeling Today?</h2>
          <p className="text-gray-700">Smart Healthcare for My Women</p>
          <Link to="/screening">
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline">
              Start Screening
            </button>
          </Link>
        </div>
        <div className="w-1/2">
        <img src={doc5} alt="Doctor" className="w-40 h-40 object-cover rounded-full mx-auto" />


        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {/* Welcome Back Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold">Welcome Back </h3>
          <p className="text-gray-700">View your report or start a new checkup</p>
          <Link to="/dr-fema">
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline">
              Chat with Dr. Fema
            </button>
          </Link>
        </div>

        {/* Quick Stats Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold">Quick Stats</h3>
          <p className="text-gray-700">Last Screening: PCOS</p>
          <p className="text-gray-700">Risk Level: Moderate</p>
          <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline">
          Health Care Plan
       </button>
        </div>

        {/* Consult Top Doctors Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold">Consult Top Doctors</h3>
          <p className="text-gray-700">Book Consultation with top Doctors.</p>
          <Link to="/doctors">
            <button className=" bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline">
              Search Doctor
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
