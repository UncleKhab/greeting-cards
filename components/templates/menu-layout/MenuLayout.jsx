import React from "react";
import EditActionBarComponent from "../../organisms/editor-action-bar/EditActionBarComponent";
import EditorActions from "../../organisms/editor-actions/EditorActions";
import styles from "./MenuLayout.module.css";
import { useSelector } from "react-redux";
const MenuLayout = () => {
  const editorState = useSelector((state) => state.editor);
  console.log(editorState);
  return (
    <div
      className={`${styles.backdrop} fixed bottom-0 w-full flex flex-col justify-end items-center pt-6`}
    >
      <div className={styles.wrapper}>
        <EditorActions />
        <EditActionBarComponent />
      </div>
    </div>
  );
};

export default MenuLayout;
