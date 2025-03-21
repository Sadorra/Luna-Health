import React, { useState } from 'react';
//import { FaUser, FaHistory, FaTint, FaHeart, FaBaby, FaExclamationTriangle, FaPain } from 'react-icons/fa';

const EndometriosisScreening = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { question: 'What is your age?', type: 'number', id: 'age' },
    { question: 'Do you have a family history of endometriosis?', type: 'select', id: 'familyHistory', options: ['Yes', 'No'] },
    { question: 'Do you experience chronic pelvic pain or severe menstrual cramps?', type: 'select', id: 'pain', options: ['Yes', 'No'] },
    { question: 'Do you have heavy menstrual bleeding?', type: 'select', id: 'heavyFlow', options: ['Yes', 'No'] },
    { question: 'Do you experience pain during or after sexual intercourse?', type: 'select', id: 'painDuringSex', options: ['Yes', 'No'] },
    { question: 'Have you had difficulty conceiving or infertility issues?', type: 'select', id: 'fertilityIssues', options: ['Yes', 'No'] },
    {
      question: 'Have you experienced any of the following symptoms? (Choose all that apply)',
      type: 'checkbox',
      id: 'otherSymptoms',
      options: ['Fatigue', 'Painful bowel movements or urination', 'Bloating or nausea'],
    },
  ];

  const updateProgress = () => {
    return ((currentStep + 1) / steps.length) * 100;
  };

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Endometriosis screening form submitted successfully!");
  };

  return (
    <div className="relative bg-gradient-to-br from-pink-200 to-pink-300 h-screen flex justify-center items-center overflow-hidden">
      <div className="absolute top-20 left-[-60px] transform rotate-25 bg-pink-300 w-40 h-40 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 right-[-60px] transform rotate-[-25deg] bg-pink-300 w-40 h-40 rounded-full opacity-20"></div>

      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-2xl relative">
        <div className="w-full bg-gray-200 h-2 rounded-lg mb-4">
          <div className="bg-pink-500 h-2 rounded-lg" style={{ width: `${updateProgress()}%` }}></div>
        </div>

        <form onSubmit={handleSubmit}>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step ${currentStep === index ? 'block' : 'hidden'}`}
            >
              <label className="flex items-center text-lg mb-4">
                {step.type !== 'checkbox' ? (
                  <FaUser className="mr-2 text-pink-500" />
                ) : (
                  <FaExclamationTriangle className="mr-2 text-pink-500" />
                )}
                {step.question}
              </label>

              {step.type === 'number' && (
                <input
                  type="number"
                  id={step.id}
                  className="w-full p-4 mb-4 border rounded-lg"
                  required
                />
              )}

              {step.type === 'select' && (
                <select
                  id={step.id}
                  className="w-full p-4 mb-4 border rounded-lg"
                  required
                >
                  <option value="">Select</option>
                  {step.options.map((option, idx) => (
                    <option key={idx} value={option.toLowerCase()}>
                      {option}
                    </option>
                  ))}
                </select>
              )}


{step.type === 'checkbox' && (
                <div>
                  {step.options.map((option, idx) => (
                    <div key={idx} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id={`${step.id}${idx}`}
                        className="mr-2"
                      />
                      <label htmlFor={`${step.id}${idx}`}>{option}</label>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex justify-between mt-4">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="bg-gray-300 text-white px-6 py-2 rounded-lg hover:bg-gray-400"
                  >
                    Back
                  </button>
                )}

                {currentStep < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600"
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

export default EndometriosisScreening;
