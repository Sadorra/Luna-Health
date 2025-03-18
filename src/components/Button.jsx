// src/components/Button.jsx
import React from 'react';

function Button({ children, onClick, primary }) {
  const buttonStyle = primary
    ? "bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    : "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow focus:outline-none focus:shadow-outline";

  return (
    <button onClick={onClick} className={buttonStyle}>
      {children}
    </button>
  );
}

export default Button;
