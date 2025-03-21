import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const RiskAnalysis = () => {
  const riskPercentage = 25;
  const data = [
    { name: "Risk", value: riskPercentage },
    { name: "Safe", value: 100 - riskPercentage },
  ];

  const COLORS = ["#e60073", "#ffccdd"];

  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-2xl max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold text-pink-700">Risk Analysis</h2>
      <p className="text-gray-600 mt-2">Your current risk level is <span className="font-bold">{riskPercentage}%</span>.</p>
      
      <div className="w-full bg-gray-200 rounded-full h-4 my-4">
        <div
          className="bg-pink-500 h-4 rounded-full"
          style={{ width: `${riskPercentage}%` }}
        ></div>
      </div>
      
      <div className="flex justify-center my-4">
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx={100}
            cy={100}
            innerRadius={50}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      
      <button className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition">Learn More</button>
      <p className="text-gray-500 mt-4">For a more detailed analysis, consult our AI assistant.</p>
    </div>
  );
};

export default RiskAnalysis;
