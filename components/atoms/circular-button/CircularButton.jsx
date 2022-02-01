import React from "react";

const CircularButton = ({ onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-full p-3 shadow-md shadow-gray-200 "
    >
      <div>{icon}</div>
    </button>
  );
};

export default CircularButton;
