import React, { useState } from 'react';

const BreastCancerScreening = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    'What is your age?',
    'Do you have a family history of breast cancer?',
    'Have you noticed any unusual changes in your breasts?',
    'Have you ever been diagnosed with any form of breast disease?',
    'Have you had a mammogram in the past 1-2 years?',
    'Did you start your menstrual cycle at an early age or experience late menopause?',
    'Have you used oral contraceptives (birth control pills) for long periods?',
    'Have you breastfed your children for more than a year?',
  ];

  const updateProgress = () => {
    let progressPercentage = ((currentStep + 1) / steps.length) * 100;
    return progressPercentage;
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
    alert('Breast cancer screening form submitted successfully!');
  };

  return (
    <div className="bg-gradient-to-r from-pink-500 to-pink-300 min-h-screen flex justify-center items-center relative overflow-hidden">
      <div className="absolute left-[-60px] top-[20%] w-40 h-40 bg-pink-400 rounded-full opacity-20 transform rotate-12"></div>
      <div className="absolute right-[-60px] top-[60%] w-40 h-40 bg-pink-400 rounded-full opacity-20 transform rotate-[-12deg]"></div>

      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-3xl text-center overflow-auto max-h-[90vh] transform translate-y-[30px] animate-fadeInUp">
        <div className="w-full bg-gray-200 h-2 rounded-lg mb-5">
          <div className="h-2 bg-pink-700" style={{ width: `${updateProgress()}%` }}></div>
        </div>

        <form onSubmit={handleSubmit}>
          {steps.map((step, index) => (
            <div key={index} className={`${showStep(index)} step`}>
              <label className="flex items-center text-left text-xl mb-4">
                <i className="fas fa-user mr-3 text-pink-600"></i>
                {step}
              </label>
              {index === 0 ? (
                <input
                  type="number"
                  id="age"
                  className="w-full p-4 border rounded-xl mb-4"
                  required
                />
              ) : (
                <select
                  id={`step-${index}`}
                  className="w-full p-4 border rounded-xl mb-4"
                  required
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              )}
              <div className="flex justify-between">
                {index > 0 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-500 transition"
                  >
                    Back
                  </button>
                )}
                {index < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-500 transition"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-500 transition"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default BreastCancerScreening;
