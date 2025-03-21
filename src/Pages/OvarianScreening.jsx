import React, { useState } from "react";

const OvarianCancerScreening = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    {
      question: "What is your age?",
      id: "age",
      type: "number",
    },
    {
      question: "Do you have a family history of ovarian cancer?",
      id: "familyHistory",
      type: "select",
      options: ["Yes", "No"],
    },
    {
      question: "Do you experience any of the following symptoms?",
      id: "symptoms",
      type: "checkbox",
      options: [
        "Bloating",
        "Pelvic or abdominal pain",
        "Difficulty eating or feeling full quickly",
        "Frequent urination",
      ],
    },
    {
      question: "Have you undergone genetic testing for BRCA1 or BRCA2 mutations?",
      id: "geneticTesting",
      type: "select",
      options: ["Yes", "No"],
    },
    {
      question: "Have you had an early onset of menstruation or late menopause?",
      id: "menstruationHistory",
      type: "select",
      options: ["Yes", "No"],
    },
    {
      question: "Have you ever used birth control pills?",
      id: "birthControl",
      type: "select",
      options: ["Yes", "No"],
    },
    {
      question: "Do you have a history of obesity?",
      id: "weight",
      type: "select",
      options: ["Yes", "No"],
    },
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
    alert("Ovarian cancer screening form submitted successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-200 to-purple-100 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-40 h-40 rounded-full bg-gradient-to-r from-pink-500 to-purple-400 opacity-20 z-0 transform rotate-12"></div>
      <div className="absolute top-2/3 right-0 w-40 h-40 rounded-full bg-gradient-to-r from-pink-500 to-purple-400 opacity-20 z-0 transform -rotate-12"></div>
      
      <div className="container bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full z-10">
        <div className="progress-bar w-full bg-gray-200 rounded-full mb-4">
          <div
            className="progress h-2 bg-pink-500 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
        
        <form onSubmit={handleSubmit}>
          {steps.map((step, index) => (
            <div key={index} className={`step ${currentStep === index ? "block" : "hidden"}`}>
              <label className="flex items-center text-lg mb-4">
                <i className="fas fa-question-circle text-pink-500 mr-3"></i> {step.question}
              </label>
              
              {step.type === "select" ? (
                <select
                  id={step.id}
                  required
                  className="w-full p-4 mb-4 border border-gray-300 rounded-md"
                >
                  <option value="">Select</option>
                  {step.options.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : step.type === "checkbox" ? (
                <div className="space-y-2">
                  {step.options.map((option, idx) => (
                    <div key={idx} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`symptom${idx}`}
                        className="mr-2"
                      />
                      <label htmlFor={`symptom${idx}`}>{option}</label>
                    </div>
                  ))}
                </div>
              ) : (
                <input
                  type={step.type}
                  id={step.id}

                  required
                  className="w-full p-4 mb-4 border border-gray-300 rounded-md"
                />
              )}

              <div className="flex justify-between mt-4">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                  >
                    Back
                  </button>
                )}
                {currentStep < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
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

export default OvarianCancerScreening;
