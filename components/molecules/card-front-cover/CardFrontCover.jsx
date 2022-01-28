import React from "react";
import { useSelector } from "react-redux";
const CardFrontCover = () => {
  const { imageUrl } = useSelector((state) => state.card.frontPage);
  const handleSelectNewCover = (e) => {
    console.log(e);
  };
  return (
    <div className="w-full h-full">
      {imageUrl && <img src={imageUrl} alt="" className="w-full h-full" />}
      {!imageUrl && (
        <div className="w-full h-full bg-gray-400 flex flex-col justify-center items-center">
          <p>Select a front cover</p>
          <button onClick={handleSelectNewCover}>Select</button>
        </div>
      )}
    </div>
  );
};

export default CardFrontCover;
