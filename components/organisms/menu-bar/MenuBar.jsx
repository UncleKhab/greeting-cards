import React from "react";
import CircularButton from "../../atoms/circular-button/CircularButton";
import { menuIcon, profileIcon } from "./icons";
const MenuBar = () => {
  return (
    <nav className="px-6 flex justify-between sticky top-4 z-50">
      <CircularButton icon={menuIcon} />
      <CircularButton icon={profileIcon} />
    </nav>
  );
};

export default MenuBar;
