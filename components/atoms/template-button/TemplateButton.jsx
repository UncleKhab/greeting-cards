import React from "react";

const TemplateButton = ({ iconSrc, onClick }) => {
  return (
    <button
      className={`flex flex-col justify-center items-center flex-1 p-0`}
      onClick={onClick}
    >
      <img src={iconSrc} />
    </button>
  );
};

export default TemplateButton;
