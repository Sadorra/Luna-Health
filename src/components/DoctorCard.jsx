// src/components/DoctorCard.jsx
// src/components/DoctorCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function DoctorCard({ doctor }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={doctor.image} alt={doctor.name} />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{doctor.name}</h3>
        <p className="text-gray-600">{doctor.specialization}, {doctor.experience} years experience</p>
        <p className="text-gray-600">Available: {doctor.availability}</p>
        <Link
          to={`/appointment?doctor=${doctor.name}`} // Pass doctor name as URL parameter
          className="mt-2 inline-block bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
}

export default DoctorCard;

/*import React from 'react';
import { Link } from 'react-router-dom';

function DoctorCard({ doctor }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={doctor.image} alt={doctor.name} />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{doctor.name}</h3>
        <p className="text-gray-600">{doctor.specialization}, {doctor.experience} years experience</p>
        <p className="text-gray-600">Available: {doctor.availability}</p>
        <Link to="/appointment" className="mt-2 inline-block bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Book Appointment
        </Link>
      </div>
    </div>
  );
}

export default DoctorCard;

*/
