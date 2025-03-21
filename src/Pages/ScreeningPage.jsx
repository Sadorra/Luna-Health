import React from "react";
import { Link } from "react-router-dom";

const DiseaseScreening = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r  bg-pink-100 ">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-xs w-full">
        <h1 className="text-2xl text-center text-pink-600 mb-8">Select a Disease for Screening</h1>
        <div className="flex flex-col gap-4">
          <Link
            to="/PcosScreening"
            className="py-3 px-6 bg-pink-600 text-white rounded-lg text-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          >
            PCOS
          </Link>
          <Link
            to="/CervicalCancer"
            className="py-3 px-6 bg-pink-600 text-white rounded-lg text-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          >
            Cervical Cancer
          </Link>
          <Link
            to="/BreastCancer"
            className="py-3 px-6 bg-pink-600 text-white rounded-lg text-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          >
            Breast Cancer
          </Link>
          <Link
            to="/Endometriosis"
            className="py-3 px-6 bg-pink-600 text-white rounded-lg text-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          >
            Endometriosis
          </Link>
          <Link
            to="/OvarianScreening"
            className="py-3 px-6 bg-pink-600 text-white rounded-lg text-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          >
            Ovarian Cancer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiseaseScreening;
