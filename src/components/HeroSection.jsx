import React from 'react';
import { Link } from 'react-router-dom';
//import doc10 from '../assets/doc10.jpg';
import pic4 from '../assets/pic4.jpg';

function HeroSection() {
  return (
    <section className="bg-pink-50 py-16 px-8 flex items-center justify-between">
      <div className="w-1/2">
        {/* Hero Title */}
        <h1 className="text-5xl font-extrabold mb-6 text-gray-800 leading-snug">
          Your Personal AI Doctor for Women's Health
        </h1>

        {/* Hero Description */}
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Welcome to <span className="font-semibold text-pink-600">FEMA</span> – Your Women's Health Companion 💖. FEMA is a dedicated women's health tracking platform designed to empower, educate, and support women in managing their well-being. Our mission is to provide reliable information, early screening tools, and health insights for breast cancer, ovarian cancer, endometriosis, PCOS, and cervical cancer.
        </p>

        {/* Call-to-Action Button */}
        <div>
          <Link to="/login">
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-semibold text-lg py-3 px-6 rounded focus:outline-none focus:ring-4 focus:ring-pink-300 transition-shadow duration-300">
              Get Started for Free
            </button>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-1/2 flex items-center justify-center">
      
      <img
  src={pic4}
  alt="Hero Image"
  className="max-w-lg max-h-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
  style={{
    boxShadow: `
      0px 20px 40px rgba(0, 0, 0, 0.8),
      0px 30px 60px rgba(0, 0, 0, 0.6),
      0px 40px 80px rgba(0, 0, 0, 0.4)
    `
  }}
/>


      </div>
    </section>
  );
}

export default HeroSection;
