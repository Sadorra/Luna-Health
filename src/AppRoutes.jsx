// src/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ScreeningPage from './pages/ScreeningPage';
import DrFemaPage from './pages/DrFemaPage';
import DoctorsPage from './pages/DoctorsPage';
import HealthProfilePage from './pages/HealthProfilePage';
import DashboardPage from './pages/DashboardPage';
import EmptyPage from "./pages/EmptyPage";
import AppointmentPage from './pages/AppointmentPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/screening" element={<ScreeningPage />} />
      <Route path="/dr-fema" element={<DrFemaPage />} />
      <Route path="/doctors" element={<DoctorsPage />} />
      <Route path="/health-profile" element={<HealthProfilePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/doctors" element={<DoctorsPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/dr-fema" element={<DrFemaPage />} />
      <Route path="/appointment" element={<AppointmentPage />} />
    </Routes>
  );
}

export default AppRoutes;
