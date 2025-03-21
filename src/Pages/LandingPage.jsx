// src/pages/LandingPage.jsx
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WhatIsFemaSection from '../components/WhatIsFemaSection';
import WhyChooseFemaSection from '../components/WhyChooseFemaSection';
import doc10 from '../assets/doc10.jpg';
function LandingPage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <WhatIsFemaSection />
      <WhyChooseFemaSection />
    </div>
  );
}

export default LandingPage;
