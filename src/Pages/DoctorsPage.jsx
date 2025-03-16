// src/pages/DoctorsPage.jsx
import React from 'react';
import DoctorCard from '../components/DoctorCard';
import doc1 from '../assets/doc1.jpg';
import doc2 from '../assets/doc2.jpg';
import doc3 from '../assets/doc3.jpg';
import doc4 from '../assets/doc4.jpg';
import doc5 from '../assets/doc5.jpg';
import doc6 from '../assets/doc6.jpg';
import doc7 from '../assets/doc7.jpg';
import doc8 from '../assets/doc8.jpg';
function DoctorsPage() {
  const doctors = [
    {
      id: 1,
      name: "Dr. John Lee",
      specialization: "Endocrinologist",
      experience: 12,
      availability: "Mon-Fri",
      image: doc1,
    },
    {
      id: 2,
      name: "Dr. Sarah Kim",
      specialization: "Neurologist",
      experience: 8,
      availability: "Tue, Thu",
      image: doc2,
    },
    {
      id: 3,
      name: "Dr. Mike Chen",
      specialization: "Gastroenterologist",
      experience: 7,
      availability: "Mon, Wed, Fri",
      image: doc3,
    },
    {
      id: 4,
      name: "Dr. Anne Wright",
      specialization: "Psychiatrist",
      experience: 15,
      availability: "Mon-Fri",
      image: doc4,
    },
    {
      id: 5,
      name: "Dr. David Brown",
      specialization: "Endocrinologist",
      experience: 12,
      availability: "Mon, Thu",
      image: doc6,
    },
      {
        id: 6,
        name: "Dr. Emily Davis",
        specialization: "Neurologist",
        experience: 8,
        availability: "Tue, Fri",
        image: doc5,
      },
      {
        id: 7,
        name: "Dr. Anthony Scott",
        specialization: "Gastroenterologist",
        experience: 7,
        availability: "Wed, Sat",
        image: doc8,
      },
      {
        id: 8,
        name: "Dr. Lisa Clark",
        specialization: "Psychiatrist",
        experience: 11,
        availability: "Mon, Wed",
        image: doc7,
      },
      // Add more doctors here
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}

export default DoctorsPage;
