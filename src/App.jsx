// src/App.jsx
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen bg-gray-50">
                {/* Header */}
                <header className="bg-white shadow-md sticky top-0 z-10">
                    <div className="container mx-auto py-4 px-4 flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="text-2xl font-semibold text-pink-500">
                            Fema
                        </Link>

                        {/* Navigation Links */}
                        <nav className="space-x-6">
                            <Link to="/home" className="text-gray-700 hover:text-pink-500">
                                Home
                            </Link>
                            <Link to="/screening" className="text-gray-700 hover:text-pink-500">
                                Screening
                            </Link>
                            <Link to="/doctors" className="text-gray-700 hover:text-pink-500">
                                Doctors
                            </Link>
                            <Link to="/dashboard" className="text-gray-700 hover:text-pink-500">
                                Dashboard
                            </Link>
                            <Link to="/dr-fema" className="text-gray-700 hover:text-pink-500">
                                Dr.Fema
                            </Link>
                            <Link to="/appointment" className="text-gray-700 hover:text-pink-500">
                                Appointment
                                </Link>
                        </nav>

                        {/* User Actions */}
                        <div className="flex items-center space-x-4">
                            {/* Notification Icon */}
                            <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                                {/* Notification Icon - Replace with your own SVG or icon component */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 13.586V11a6.002 6.002 0 00-6-6c-2.475 0-4.543 1.645-5.26 4.036A6.002 6.002 0 005 11v2.586a2.032 2.032 0 01-1.405 1.405L4 17h5m6 0h5m-5 0l-1.405-1.405A2.032 2.032 0 0118 13.586V11a6.002 6.002 0 00-6-6c-2.475 0-4.543 1.645-5.26 4.036A6.002 6.002 0 005 11v2.586a2.032 2.032 0 01-1.405 1.405L4 17h5m6 0h5"
                                    />
                                </svg>
                            </button>

                            {/* User Profile Icon */}
                            <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                                {/* User Profile Icon - Replace with your own SVG or icon component */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 rounded-full bg-gray-200"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-grow">
                    <AppRoutes />
                </main>

                {/* Footer */}
                <footer className="bg-gray-100 py-4 text-center">
                    <p className="text-gray-500">
                        © {new Date().getFullYear()} Fema. All rights reserved.
                    </p>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
