import React from "react";
import styles from "./EditorActionBar.module.css";
import EditorButton from "../../atoms/editor-button/EditorButton";
import { useSelector } from "react-redux";
import { actionButtonsList } from "./buttonsList";

const EditActionBarComponent = () => {
  const { page } = useSelector((state) => state.editor);

  return (
    <div className={`${styles.wrapper} flex justify-around mb-6`}>
      {actionButtonsList[page].map((item, index) => (
        <EditorButton {...item} index={index} key={`${index}-action-button`} />
      ))}
    </div>
  );
};

export default EditActionBarComponent;
