// src/pages/DoctorsPage.jsx
import React, { useState } from 'react';
import DoctorCard from '../components/DoctorCard';

import doc1 from '../assets/doc1.jpg';
//import doc2 from '../assets/doc2.jpg';
//import doc3 from '../assets/doc3.jpg';
import doc4 from '../assets/doc4.jpg';
import doc5 from '../assets/doc5.jpg';
import doc6 from '../assets/doc6.jpg';
import doc7 from '../assets/doc7.jpg';
import doc8 from '../assets/doc8.jpg';
//import doc9 from '../assets/doc9.jpg';

function DoctorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const doctorsData = [
    {
      id: 1,
      name: "Dr. John Lee",
      specialization: "Breast Oncologist",
      experience: 12,
      availability: "Mon-Fri",
      image: doc1,
      ranking: 4, // Ranking given to doctor
    },
    {
      id: 2,
      name: "Dr. Emily Carter",
      specialization: "Endocrinologist",
      experience: 8,
      availability: "Tue-Sat",
      image: doc7,
      ranking: 5, // Ranking given to doctor
    },
    {
      id: 3,
      name: "Dr. David Kim",
      specialization: " Gynecologic Oncologist",
      experience: 5,
      availability: "Mon-Wed",
      image: doc6,

    },
    {
      id: 4,
      name: "Dr. Sarah Johnson",
      specialization: "Gynecologist",
      experience: 10,
      availability: "Wed-Sun",
      image: doc5,
      ranking: 2, // Ranking given to doctor
    },
    {
      id: 5,
      name: "Dr. Michael Brown",
      specialization: "Gynecologic Oncologist",
      experience: 15,
      availability: "Thu-Mon",
      image: doc8,

    },
    {
      id: 6,
      name: "Dr. Jennifer Davis",
      specialization: "Endocrinologist",
      experience: 7,
      availability: "Fri-Tue",
      image: doc7,
      ranking: 3, // Ranking given to doctor
    },
  ];

  // Map doctor data and ensure all have a ranking, setting a default of 3 if missing
  const doctors = doctorsData.map(doctor => ({
    ...doctor,
    ranking: doctor.ranking !== undefined ? doctor.ranking : 3 // Default ranking
  }));

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Our Doctors</h2>
      <input
        type="text"
        className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xl"
        placeholder="Search by specialization"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {filteredDoctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}

export default DoctorsPage;

