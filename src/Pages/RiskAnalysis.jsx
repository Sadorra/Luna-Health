import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RiskAnalysis = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { riskPercentage, analysisText, screeningType = 'breast' } = location.state || {};

  const getTitle = () => {
    if (screeningType === 'cervical') return 'Cervical Cancer Risk Analysis';
    if (screeningType === 'ovarian') return 'Ovarian Cancer Risk Analysis';
    if (screeningType === 'pcos') return 'PCOS Risk Analysis';
    return 'Breast Cancer Risk Analysis';
  };

  const getChartColor = () => {
    if (screeningType === 'cervical') return 'text-pink-500';
    if (screeningType === 'ovarian') return 'text-purple-600';
    if (screeningType === 'pcos') return 'text-indigo-600';
    return 'text-rose-500';
  };

  const formatInlineText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const formatAnalysisText = (text) => {
    const lines = text.split(/\n+/).filter(line => line.trim().length > 0);

    return lines.map((line, index) => {
      if (line.startsWith("##")) {
        return (
          <h4 key={index} className="text-lg font-semibold mt-4 mb-2 text-gray-800">
            {line.replace(/^##\s*/, '')}
          </h4>
        );
      }
      if (line.trim().startsWith("-") || line.trim().startsWith("•")) {
        return (
          <ul key={index} className="ml-6 list-disc mb-1 text-gray-700">
            <li>{formatInlineText(line.replace(/^[-•]\s*/, ''))}</li>
          </ul>
        );
      }
      return (
        <p key={index} className="mb-2 text-gray-700">
          {formatInlineText(line)}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-pink-300 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-4 text-center">{getTitle()}</h2>

        <div className="flex flex-col items-center">
          <div className="w-40 h-40 relative mb-4">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                className="text-gray-200"
                strokeWidth="4"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className={getChartColor()}
                strokeWidth="4"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                strokeDasharray={`${riskPercentage}, 100`}
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text
                x="18"
                y="20.35"
                className="text-base font-semibold fill-current text-gray-800"
                textAnchor="middle"
              >
                {riskPercentage}%
              </text>
            </svg>
          </div>

          <div className="w-full mt-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-800 text-center">Detailed Feedback:</h3>
            <div className="text-gray-700 text-base leading-relaxed mb-6 space-y-2">
              {formatAnalysisText(analysisText)}
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => navigate('/')}
              className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700"
            >
              Back to Home
            </button>
            <button
              onClick={() => window.print()}
              className="bg-gray-300 text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-400"
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAnalysis;
