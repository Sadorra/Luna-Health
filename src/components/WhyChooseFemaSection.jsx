import React from 'react';
import pic3 from '../assets/pic3.jpg';
 
function WhyChooseFemaSection() {
  return (
    <section className="bg-pink-50 py-16 px-8 flex items-center justify-between">
      <div className="w-1/2">
        <h2 className="text-4xl font-bold mb-4 font-extrabold">Why Choose Fema?</h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">Fema is dedicated to empowering women with the knowledge and tools they need for better health.</p>
        <ul className="list-disc pl-5">
          <li className="text-lg text-gray-700 mb-2 "><span className="font-semibold  text-pink-600">Tailored Solutions:</span> Get health advice that is specifically designed for women.</li>
          <li className="text-lg text-gray-700 mb-2 "><span className="font-semibold  text-pink-600">Expert Guidance:</span> Consult with experienced female doctors for reliable health insights.</li>
          <li className="text-lg text-gray-700 "><span className="font-semibold  text-pink-600">User-Friendly Interface:</span> Navigate easily through our platform to find the information you need.</li>
        </ul>
      </div>
      <div className="w-1/2 flex items-center justify-center"> {/* Center the image */}
      <img
  src={pic3}
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

export default WhyChooseFemaSection;
