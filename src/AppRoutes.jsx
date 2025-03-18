import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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
