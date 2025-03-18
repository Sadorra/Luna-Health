// src/pages/EntryPoint.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

function EntryPoint() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex space-x-8">
        {/* User Login */}
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm">
          <h2 className="text-2xl font-semibold mb-4 text-center">Login as User</h2>
          <p className="text-gray-700 text-center mb-4">
            Access your health profile, book appointments, and more.
          </p>
          <Link to="/login">
            <Button primary fullWidth>
              Login as User
            </Button>
          </Link>
        </div>

        {/* Doctor Login */}
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm">
          <h2 className="text-2xl font-semibold mb-4 text-center">Login as Doctor</h2>
          <p className="text-gray-700 text-center mb-4">
            Manage patient records, view appointments, and more.
          </p>
          <Button primary fullWidth>
          Login as Doctor
          </Button>

        </div>
      </div>
    </div>
  );
}

export default EntryPoint;

