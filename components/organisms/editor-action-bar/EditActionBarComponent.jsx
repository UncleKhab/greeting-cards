import React from "react";
import styles from "./EditorActionBar.module.css";
import EditorButton from "../../atoms/editor-button/EditorButton";
import { changeTab } from "../../../store/editorSlice/editorSlice";
import { useDispatch } from "react-redux";
const EditActionBarComponent = () => {
  const dispatch = useDispatch();
  const actionButtons = [
    {
      iconUrl: "/assets/svg/action-bar/animations-icon.svg",
      label: "Animations",
    },
    {
      iconUrl: "/assets/svg/action-bar/color-theme-icon.svg",
      label: "Color Theme",
    },
    {
      iconUrl: "/assets/svg/action-bar/splash-icon.svg",
      label: "Splash",
    },
    {
      iconUrl: "/assets/svg/action-bar/background-icon.svg",
      label: "Background",
    },
  ];
  return (
    <div className={`${styles.wrapper} flex justify-around mb-6`}>
      {actionButtons.map((item, index) => (
        <EditorButton {...item} key={`${index}-action-button`} />
      ))}
    </div>
  );
};

export default EditActionBarComponent;
