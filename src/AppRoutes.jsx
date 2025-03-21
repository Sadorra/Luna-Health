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
import LandingPage from './Pages/LandingPage';
import BreastCancer from './Pages/BreastCancer'; // Import LandingPage
import CervicalCancer from './Pages/CervicalCancer';
import OvarianScreening from './Pages/OvarianScreening';
import PcosScreening from './Pages/PcosScreening';
import Endometriosis from './Pages/Endometriosis';
import GeneralInfo from './Pages/GeneralInfo';
import RiskAnalysis from './Pages/RiskAnalysis';


function AppRoutes({ setIsNavBarVisible }) {
    const location = useLocation(); // Get the current path

    useEffect(() => {
        // Define the paths where the navbar should be hidden
        const hideNavBarPaths = ['/', '/landing', '/login', '/register'];  // Added '/landing'

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
            <Route path="/" element={<Navigate to="/landing" />} />  {/* Redirect / to /landing */}
            <Route path="/landing" element={<LandingPage />} />  {/* Landing page route */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/screening" element={<ScreeningPage />} />
            <Route path="/dr-fema" element={<DrFemaPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/health-profile" element={<HealthProfilePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />

            <Route path="/BreastCancer" element={<BreastCancer />} />
        <Route path="/OvarianScreening" element={<OvarianScreening />} />
        <Route path="/CervicalCancer" element={<CervicalCancer />} />
        <Route path="/PcosScreening" element={<PcosScreening />} />
        <Route path="/Endometriosis" element={<Endometriosis />} />
        <Route path="/GeneralInfo" element={<GeneralInfo />} />
        <Route path="/RiskAnalysis" element={<RiskAnalysis />} />



            {/* Default redirect to HomePage after login */}
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
}

export default AppRoutes;

