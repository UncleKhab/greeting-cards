import React from "react";
import { useSelector } from "react-redux";
const TemplateTwo = () => {
  const { content } = useSelector((state) => state.card.inside.template);
  return (
    <div className="p-8 flex flex-col justify-center items-center h-full">
      <h1>{content.title}</h1>
      <p>{content.textContent}</p>
    </div>
  );
};

export default TemplateTwo;
