import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTab } from "../../../store/editorSlice/editorSlice";
import styles from "./EditorMenuButton.module.css";

const EditorMenuButton = ({ iconUrl, label, index }) => {
  const dispatch = useDispatch();
  const currentState = useSelector((state) => state.editor);
  const { tab } = currentState;
  return (
    <button
      className={`${styles.editorBtn} ${
        tab === index ? "text-black" : "text-white"
      } flex flex-col justify-between items-center gap-1 flex-1`}
      onClick={() => dispatch(changeTab(index))}
    >
      <img
        src={iconUrl}
        className={`${tab === index ? styles.imgActive : ""}`}
      />
      <p>{label}</p>
    </button>
  );
};

export default EditorMenuButton;
