import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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
    useEffect(() => {
        // Handle Navbar Visibility on Route Change
        const currentPath = window.location.pathname;
        const hideNavBarPaths = ['/', '/login', '/register'];
        if (hideNavBarPaths.includes(currentPath)) {
            setIsNavBarVisible(false);
        } else {
            setIsNavBarVisible(true);
        }
    }, [setIsNavBarVisible]);

    return (
        <Routes>
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
        </Routes>
    );
}

export default AppRoutes;
