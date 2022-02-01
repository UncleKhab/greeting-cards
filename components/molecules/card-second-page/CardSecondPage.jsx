import React from "react";
import { useSelector } from "react-redux";
import TemplateOne from "../../templates/card-inside-templates/TemplateOne";
import TemplateTwo from "../../templates/card-inside-templates/TemplateTwo";
const CardSecondPage = () => {
  const { type } = useSelector((state) => state.card.inside.template);

  return (
    <div className="w-full h-full">
      {type === 0 && <TemplateOne />}
      {type === 1 && <TemplateTwo />}
    </div>
  );
};

export default CardSecondPage;
