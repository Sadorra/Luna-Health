// src/components/Checkbox.jsx
import React from 'react';

function Checkbox({ label, checked, onChange }) {
  return (
    <div
      className={`flex items-center py-2 px-4 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors duration-200 ${
        checked ? 'bg-pink-100 border-2 border-pink-500' : '' // Add a background color when checked
      }`}
    >
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="form-checkbox h-5 w-5 text-pink-600 rounded focus:ring-0" // Custom pink checkbox style
        />
        <span className="ml-2 text-gray-700">{label}</span>
      </label>
    </div>
  );
}

export default Checkbox;



