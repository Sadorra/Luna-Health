import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ScreeningPage from './pages/ScreeningPage';
import DrFemaPage from './pages/DrFemaPage';
import DoctorsPage from './pages/DoctorsPage';
import HealthProfilePage from './pages/HealthProfilePage';
import DashboardPage from './pages/DashboardPage';
import AppointmentPage from './pages/AppointmentPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import EntryPoint from './pages/EntryPoint';

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
