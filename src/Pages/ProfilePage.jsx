// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call)
    // For this example, let's simulate successful login with mock user data
    const mockUser = {
      name: 'John Doe',
      email: email, // or 'john.doe@example.com', but using provided email
      gender: 'Male',
      dateOfBirth: '1990-05-15',
      address: '123 Main St, Anytown USA',
      contact: '555-123-4567',
      membership: 'Premium'
    };

    // In a real app, you'd get user data from an API
    console.log('Login attempt:', { email, password });

    // Store user data in localStorage (or use global state)
    localStorage.setItem('user', JSON.stringify(mockUser));
    alert('Login successful!');

    navigate('/home'); // Redirect to home page after successful login
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col items-center">
            <Button primary type="submit">
              Sign In
            </Button>
            <Link to="/register" className="mt-4 inline-block align-baseline font-bold text-sm text-pink-500 hover:text-pink-800">
              Don't have an account, Sign Up!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
