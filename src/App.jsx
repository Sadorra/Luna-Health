import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {
    // State for User Info Panel
    const [isUserInfoVisible, setIsUserInfoVisible] = useState(false);

    // Toggle User Info Panel
    const toggleUserInfo = () => {
        setIsUserInfoVisible(!isUserInfoVisible);
    };

    // State to control navbar visibility (handled by AppRoutes)
    const [isNavBarVisible, setIsNavBarVisible] = useState(true);

    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen bg-gray-50 relative">
                {/* Conditional Header */}
                {isNavBarVisible && (
                    <header className="bg-white shadow-md sticky top-0 z-10">
                        <div className="container mx-auto py-4 px-4 flex items-center justify-between">
                            <Link to="/home" className="text-2xl font-semibold text-pink-500">
                                Fema
                            </Link>
                            <nav className="space-x-6">
                                <Link to="/home" className="text-gray-700 hover:text-pink-500">Home</Link>
                                <Link to="/screening" className="text-gray-700 hover:text-pink-500">Screening</Link>
                                <Link to="/doctors" className="text-gray-700 hover:text-pink-500">Doctors</Link>
                                <Link to="/dashboard" className="text-gray-700 hover:text-pink-500">Dashboard</Link>
                                <Link to="/dr-fema" className="text-gray-700 hover:text-pink-500">Dr.Fema</Link>
                                <Link to="/appointment" className="text-gray-700 hover:text-pink-500">Appointment</Link>
                            </nav>
                            <button
                                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                onClick={toggleUserInfo}
                            >
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
                    </header>
                )}

                {/* User Info Panel */}
                {isUserInfoVisible && (
                    <div className="absolute top-20 right-4 bg-white bg-opacity-80 shadow-lg rounded-lg p-20 w-1/10">
                        <h3 className="text-lg font-semibold mb-2">User Information</h3>
                        <p>Name: user1</p>
                        <p>Email: user1@example.com</p>
                        <p>Role: User</p>
                        <button
                            className="mt-2 text-pink-500 hover:text-pink-700 font-semibold"
                            onClick={toggleUserInfo}
                        >
                            Close
                        </button>
                    </div>
                )}

                {/* Main Content */}
                <main className="flex-grow">
                    <AppRoutes setIsNavBarVisible={setIsNavBarVisible} />
                </main>

                {/* Footer */}
                <footer className="bg-gray-100 py-4 text-center">
                    <p className="text-gray-500">© {new Date().getFullYear()} Fema. All rights reserved.</p>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
