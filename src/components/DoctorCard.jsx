// src/components/DoctorCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function DoctorCard({ doctor }) {
  // Function to convert ranking to stars
  const getStars = (ranking) => {
    const starCount = parseInt(ranking); // Assuming ranking is a number
    const stars = '★'.repeat(starCount) + '☆'.repeat(5 - starCount); // Filled and empty stars
    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <img className="w-full h-48 object-cover" src={doctor.image} alt={doctor.name} />
      <div className="p-4 flex flex-col flex-grow relative"> {/* Added relative */}
        <div className="absolute top-2 right-2 text-yellow-500">
          {/* Render stars if ranking exists */}
          {doctor.ranking && <div>{getStars(doctor.ranking)}</div>}
        </div>
        <h3 className="text-lg font-semibold">{doctor.name}</h3>
        <p className="text-gray-600">{doctor.specialization}, {doctor.experience} years experience</p>
        <p className="text-gray-600">Available: {doctor.availability}</p>
        <div className="mt-auto">
          <Link
            to={`/appointment?doctor=${doctor.name}`}
            className="inline-block bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;

