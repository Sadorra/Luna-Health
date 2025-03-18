import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ScreeningPage from './Pages/ScreeningPage';
import DrFemaPage from './Pages/DrFemaPage';
import DoctorsPage from './Pages/DoctorsPage';
import HealthProfilePage from './Pages/HealthProfilePage';
import DashboardPage from './Pages/DashboardPage';
import AppointmentPage from './Pages/AppointmentPage';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
import EntryPoint from './Pages/EntryPoint';

function AppRoutes({ setIsNavBarVisible }) {
    const location = useLocation(); // Get the current path

    useEffect(() => {
        // Define the paths where the navbar should be hidden
        const hideNavBarPaths = ['/', '/login', '/register'];

        // Dynamically toggle navbar visibility based on the current route
        if (hideNavBarPaths.includes(location.pathname)) {
            setIsNavBarVisible(false);
        } else {
            setIsNavBarVisible(true);
        }
    }, [location, setIsNavBarVisible]);

    return (
        <Routes>
            {/* Define routes */}
            <Route path="/" element={<EntryPoint />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/screening" element={<ScreeningPage />} />
            <Route path="/dr-fema" element={<DrFemaPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/health-profile" element={<HealthProfilePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />

            {/* Default redirect to HomePage after login */}
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
}

export default AppRoutes;
