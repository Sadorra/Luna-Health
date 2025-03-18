// src/pages/AppointmentPage.jsx

// src/pages/AppointmentPage.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/Button';

function AppointmentPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const doctorName = queryParams.get('doctor') || ''; // Get doctor name from URL parameter

  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    contactDetails: '',
    consultationType: 'inPerson', // Default to in-person
    preferredDate: '',
    preferredTime: '',
    doctor: doctorName, // Initialize doctor name from URL parameter
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Handle form submission logic here (e.g., send to API)
    console.log('Form Data:', formData);
    alert('Appointment request submitted!');
  };

  // useEffect to update form data after doctorName is available
  useEffect(() => {
    setFormData(prevFormData => ({
      ...prevFormData,
      doctor: doctorName,
    }));
  }, [doctorName]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>

      <div className="bg-white rounded-lg shadow-md p-6">
        <form>
          {/* Doctor Name (Read-Only) */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="doctor">
              Doctor Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
              id="doctor"
              type="text"
              name="doctor"
              value={formData.doctor}
              readOnly // Make the field read-only
            />
          </div>

          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateOfBirth">
              Date of Birth
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dateOfBirth"
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
              Gender
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Address
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
            />
          </div>

          {/* Contact Details */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactDetails">
              Contact Details
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contactDetails"
              type="text"
              name="contactDetails"
              value={formData.contactDetails}
              onChange={handleChange}
              placeholder="Enter your phone number or email"
            />
          </div>

          {/* Consultation Type */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Consultation Type
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="inPerson"
                name="consultationType"
                value="inPerson"
                checked={formData.consultationType === 'inPerson'}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="mr-4" htmlFor="inPerson">
                In-Person
              </label>

              <input
                type="radio"
                id="telemedicine"
                name="consultationType"
                value="telemedicine"
                checked={formData.consultationType === 'telemedicine'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="telemedicine">Telemedicine</label>
            </div>
          </div>

          {/* Preferred Date */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="preferredDate">
              Preferred Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="preferredDate"
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
            />
          </div>

          {/* Preferred Time */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="preferredTime">
              Preferred Time
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="preferredTime"
              type="time"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <Button primary onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AppointmentPage;

/*
import React, { useState } from 'react';
import Button from '../components/Button';

function AppointmentPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    contactDetails: '',
    consultationType: 'inPerson', // Default to in-person
    preferredDate: '',
    preferredTime: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Handle form submission logic here (e.g., send to API)
    console.log('Form Data:', formData);
    alert('Appointment request submitted!');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>

      <div className="bg-white rounded-lg shadow-md p-6">
        <form>
         
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>

         
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateOfBirth">
              Date of Birth
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dateOfBirth"
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </div>

          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
              Gender
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Address
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
            />
          </div>

          
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactDetails">
              Contact Details
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contactDetails"
              type="text"
              name="contactDetails"
              value={formData.contactDetails}
              onChange={handleChange}
              placeholder="Enter your phone number or email"
            />
          </div>

         
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Consultation Type
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="inPerson"
                name="consultationType"
                value="inPerson"
                checked={formData.consultationType === 'inPerson'}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="mr-4" htmlFor="inPerson">
                In-Person
              </label>

              <input
                type="radio"
                id="telemedicine"
                name="consultationType"
                value="telemedicine"
                checked={formData.consultationType === 'telemedicine'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="telemedicine">Telemedicine</label>
            </div>
          </div>

         
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="preferredDate">
              Preferred Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="preferredDate"
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
            />
          </div>

          
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="preferredTime">
              Preferred Time
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="preferredTime"
              type="time"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
            />
          </div>

          
          
          <Button primary onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AppointmentPage;
*/