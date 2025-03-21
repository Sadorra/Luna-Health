import React from 'react';
import pic2 from '../assets/pic2.jpg';

function WhatIsFemaSection() {
  return (
    <section className="py-16 px-8 flex items-center justify-between">
     <div className="w-1/2 flex items-center justify-center "> {/* Center the image */}
     <img
  src={pic2}
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
      <div className="w-1/2">
        <h2 className="text-4xl font-bold mb-4 font-extrabold">What is Fema?</h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">Fema is an AI-driven platform designed specifically for women, offering personalized health advice and early disease screening.</p>
        <ul className="text-lg text-gray-700 mb-10 leading-relaxed">
          <li className="text-gray-600 mb-2"><span className="font-semibold  text-pink-600">AI Health Advisor:</span> Receive personalized health advice tailored to your unique needs.</li>
          <li className="text-gray-600 mb-2"><span className="font-semibold text-pink-600">Early Disease Screening:</span> Access early screening processes to detect potential health risks.</li>
          <li className="text-gray-600"><span className="font-semibold text-pink-600">Doctor Profiles:</span> Explore profiles of qualified female doctors for consultations and advice.</li>
        </ul>
      </div>
    </section>
  );
}

export default WhatIsFemaSection;
