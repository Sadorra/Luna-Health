import React, { useState } from 'react';

const CervicalCancerScreening = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    'age',
    'familyHistory',
    'papSmear',
    'bleeding',
    'hpvVaccine',
    'smoking',
    'pregnancy',
  ];

  const updateProgress = () => {
    return ((currentStep + 1) / steps.length) * 100;
  };

  const showStep = (index) => {
    return index === currentStep ? 'block' : 'hidden';
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cervical cancer screening form submitted successfully!');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-pink-200 to-pink-300">
      <div className="container bg-white p-8 rounded-xl shadow-lg w-full max-w-lg overflow-auto">
        <div className="progress-bar w-full bg-gray-200 h-2 rounded mb-6">
          <div
            className="progress h-2 rounded bg-pink-500"
            style={{ width: `${updateProgress()}%` }}
          />
        </div>
        <form onSubmit={handleSubmit}>
          {steps.map((step, index) => (
            <div key={step} className={`step ${showStep(index)}`}>
              <label className="flex items-center mt-4 text-lg text-left">
                <i className={`fas fa-${step === 'age' ? 'user' : step === 'familyHistory' ? 'history' : step === 'papSmear' ? 'stethoscope' : step === 'bleeding' ? 'exclamation-triangle' : step === 'hpvVaccine' ? 'virus' : step === 'smoking' ? 'smoking' : 'baby'}`} />
                <span className="ml-2">{step === 'age' ? 'What is your age?' : 
                  step === 'familyHistory' ? 'Do you have a family history of cervical cancer?' :
                  step === 'papSmear' ? 'Have you ever had a Pap smear test?' :
                  step === 'bleeding' ? 'Do you experience unusual vaginal bleeding or discharge?' :
                  step === 'hpvVaccine' ? 'Have you been vaccinated against HPV?' :
                  step === 'smoking' ? 'Do you smoke?' : 'Have you been pregnant before?' 
                }</span>
              </label>
              <select
                id={step}
                required
                className="w-full p-4 mt-2 border border-gray-300 rounded-lg text-lg"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <div className="btn-group flex justify-between mt-6">
                {index > 0 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 text-lg"
                  >
                    Back
                  </button>
                )}
                <button
                  type={index === steps.length - 1 ? 'submit' : 'button'}
                  onClick={nextStep}
                  className="bg-pink-500 px-6 py-3 rounded-lg text-white text-lg hover:bg-pink-600"
                >
                  {index === steps.length - 1 ? 'Submit' : 'Next'}
                </button>
              </div>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default CervicalCancerScreening;
