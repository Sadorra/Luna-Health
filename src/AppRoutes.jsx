// src/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ScreeningPage from './Pages/ScreeningPage';
import DrFemaPage from './Pages/DrFemaPage';
import DoctorsPage from './Pages/DoctorsPage';
import HealthProfilePage from './Pages/HealthProfilePage';
import DashboardPage from './Pages/DashboardPage';
import EmptyPage from "./Pages/EmptyPage";
import AppointmentPage from './Pages/AppointmentPage';

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
