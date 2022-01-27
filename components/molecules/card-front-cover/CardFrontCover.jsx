import React from "react";
import { useSelector } from "react-redux";
const CardFrontCover = () => {
  const { frontPage } = useSelector((state) => state.card);
  return (
    <div className="w-full h-full">
      <img src={frontPage.imageUrl} alt="" className="w-full h-full" />
    </div>
  );
};

export default CardFrontCover;
