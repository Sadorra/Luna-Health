import React from "react";
import { Link } from "react-router-dom";
import { FaComments, FaLightbulb, FaStethoscope } from "react-icons/fa";
import doc10 from "../assets/doc10.jpg";

function HomePage() {
  return (
    <div className="container mx-auto p-8">
      {/* Hero Section */}
      <div className="bg-pink-100 rounded-lg shadow-md p-6 flex items-center justify-between h-80">
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold mb-2">What are You feeling Today?</h2>
          <p className="text-gray-700">
            Smart Healthcare for My Women. Discover a personalized approach to
            women's health, designed to support your unique needs every step of the way.
          </p>
          <Link to="/screening">
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline">
              Start Screening
            </button>
          </Link>
        </div>
        <div className="w-1/2">
          <img src={doc10} alt="Doctor" className="w-40 h-70 object-cover rounded-full mx-auto" />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-9 md:grid-cols-3 gap-4 mt-10">
        {/* Welcome Back Section */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between h-60">
          <div className="flex items-center">
            <FaComments className="text-pink-500 text-7xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold justify-center">Welcome to FEMA</h3>
              <p className="text-gray-700">
                Explore our intuitive platform empowers you to take control of your health with ease and confidence.
              </p>
            </div>
          </div>
          <Link to="/dr-fema">
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline">
              Chat with Dr. Fema
            </button>
          </Link>
        </div>

        {/* Key Insights Section */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between h-50">
          <div className="flex items-center">
            <FaLightbulb className="text-pink-500 text-7xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Key Insights</h3>
              <p className="text-gray-700">
                A Guide to Common Health Challenges and Solutions for Women. Gain actionable tips and reliable resources to empower and support your well-being.
              </p>
            </div>
          </div>
          <Link to="/GeneralInfo">
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline">
              Explore Insights
            </button>
          </Link>
        </div>

        {/* Consult Top Doctors Section */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between h-50">
          <div className="flex items-center">
            <FaStethoscope className="text-pink-500 text-7xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Consult Top Doctors</h3>
              <p className="text-gray-700">
                Book Consultation with top Doctors. Access a network of trusted professionals dedicated to providing exceptional care tailored to your needs.
              </p>
            </div>
          </div>
          <Link to="/doctors">
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline">
              Search Doctor
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
