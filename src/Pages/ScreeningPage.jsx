// src/pages/ScreeningPage.jsx
import React, { useState } from 'react';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';

function ScreeningPage() {
  const [symptoms, setSymptoms] = useState({
    chestPain: false,
    radiatingPain: false,
    irregularHeartbeat: false,
    coldSweats: false,
    nausea: false,
  });

  const handleCheckboxChange = (event) => {
    setSymptoms({
      ...symptoms,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = () => {
    // Handle form submission (e.g., send data to API)
    console.log("Selected symptoms:", symptoms);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Select what you are experiencing from the below list:</h2>
      <Checkbox
        label="Chest pain or pressure"
        name="chestPain"
        checked={symptoms.chestPain}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        label="Pain radiating to arms, jaw, neck, or back"
        name="radiatingPain"
        checked={symptoms.radiatingPain}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        label="Irregular heartbeat"
        name="irregularHeartbeat"
        checked={symptoms.irregularHeartbeat}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        label="Cold sweats"
        name="coldSweats"
        checked={symptoms.coldSweats}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        label="Nausea or vomiting"
        name="nausea"
        checked={symptoms.nausea}
        onChange={handleCheckboxChange}
      />
      <Button primary onClick={handleSubmit}>
        Continue
      </Button>
    </div>
  );
}

export default ScreeningPage;
