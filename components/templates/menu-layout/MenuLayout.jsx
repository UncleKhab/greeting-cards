import React, { useState } from "react";
import EditActionBarComponent from "../../organisms/editor-action-bar/EditActionBarComponent";
import EditorActions from "../../organisms/editor-actions/EditorActions";
import styles from "./MenuLayout.module.css";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
const wrapperVariants = {
  closed: { height: 0 },
  open: { height: "unset" },
};
const MenuLayout = () => {
  const editorState = useSelector((state) => state.editor);
  const [isOpen, setIsOpen] = useState(false);
  console.log(editorState);
  return (
    <div
      className={`${styles.backdrop} fixed bottom-0 w-full flex flex-col justify-end items-center pt-6`}
    >
      <div
        className={styles.toggler}
        onClick={() => setIsOpen((prevState) => !prevState)}
      ></div>
      <motion.div
        className={styles.wrapper}
        variants={wrapperVariants}
        initial={{ height: 0 }}
        animate={isOpen ? "open" : "closed"}
      >
        <EditorActions />
        <EditActionBarComponent />
      </motion.div>
    </div>
  );
};

export default MenuLayout;
