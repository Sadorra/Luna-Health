import React, { useState } from 'react';

const PcosScreening = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    {
      question: "What is your age?",
      id: "age",
      type: "number",
    },
    {
      question: "Do you have irregular periods?",
      id: "irregularPeriods",
      type: "select",
      options: ["Yes", "No"],
    },
    {
      question: "Do you experience excessive hair growth (hirsutism)?",
      id: "excessHair",
      type: "select",
      options: ["Yes", "No"],
    },
    {
      question: "Do you have acne or oily skin?",
      id: "acne",
      type: "select",
      options: ["Yes", "No"],
    },
    {
      question: "Do you struggle with weight gain or obesity?",
      id: "weight",
      type: "select",
      options: ["Yes", "No"],
    },
    {
      question: "Have you been diagnosed with ovarian cysts?",
      id: "ovarianCysts",
      type: "select",
      options: ["Yes", "No"],
    },
    {
      question: "Is there a family history of PCOS?",
      id: "familyHistory",
      type: "select",
      options: ["Yes", "No"],
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("PCOS screening form submitted successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-200 to-purple-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <div className="mb-4 h-2 bg-gray-200 rounded-full">
          <div className="h-full bg-pink-500 rounded-full" style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}></div>
        </div>
        <form onSubmit={handleSubmit}>
          {steps.map((step, index) => (
            <div key={index} className={`step ${currentStep === index ? "block" : "hidden"}`}>
              <label htmlFor={step.id} className="block text-lg text-gray-700 mb-2 flex items-center">
                <i className="fas fa-user mr-2 text-pink-500"></i> {step.question}
              </label>
              {step.type === "select" ? (
                <select id={step.id} required className="w-full p-4 mb-4 border border-gray-300 rounded-md text-gray-700">
                  <option value="">Select</option>
                  {step.options.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input type={step.type} id={step.id} required className="w-full p-4 mb-4 border border-gray-300 rounded-md text-gray-700" />
              )}
              <div className="flex justify-between">
                {currentStep > 0 && (
                  <button type="button" onClick={handlePrev} className="px-6 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600">
                    Back
                  </button>
                )}
                {currentStep < steps.length - 1 ? (
                  <button type="button" onClick={handleNext} className="px-6 py-2 text-white bg-pink-500 rounded-md hover:bg-pink-600">
                    Next
                  </button>
                ) : (
                  <button type="submit" className="px-6 py-2 text-white bg-pink-500 rounded-md hover:bg-pink-600">
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

export default PcosScreening;
