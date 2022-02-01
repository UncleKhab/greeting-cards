import React from "react";
import styles from "./MenuLayout.module.css";
import EditActionBarComponent from "../../organisms/editor-tabs-bar/EditTabsComponent";
import EditorActions from "../../organisms/editor-actions/EditorActions";

// 3rd IMPORTS
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
// STORE ACTIONS
import { toggleEditor } from "/store/editorSlice/editorSlice";
import { changeTab } from "../../../store/editorSlice/editorSlice";

const wrapperVariants = {
  closed: { height: 0 },
  open: { height: "unset" },
};
const MenuLayout = () => {
  const { isEditorOpen } = useSelector((state) => state.editor);
  const dispatch = useDispatch();

  const handleToggleEditor = () => {
    if (!isEditorOpen) {
      dispatch(changeTab(0));
    }
    dispatch(toggleEditor());
  };
  return (
    <div
      className={`${styles.backdrop} fixed bottom-0 w-full flex flex-col justify-end items-center pt-4`}
    >
      <button
        className={`${styles.toggler} mb-4 px-4 py-2 rounded-lg font-bold`}
        onClick={handleToggleEditor}
      >
        {isEditorOpen && "Apply"}
        {!isEditorOpen && "Edit"}
      </button>
      <motion.div
        className={styles.wrapper}
        variants={wrapperVariants}
        initial={{ height: 0 }}
        animate={isEditorOpen ? "open" : "closed"}
      >
        <EditorActions />
        <EditActionBarComponent />
      </motion.div>
    </div>
  );
};

export default MenuLayout;
