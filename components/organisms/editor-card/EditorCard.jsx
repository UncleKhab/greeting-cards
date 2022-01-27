import React from "react";
import styles from "./EditorCard.module.css";
import CardEditorPage from "../editor-card-page/CardEditorPage";
import CardFrontCover from "../../molecules/card-front-cover/CardFrontCover";
import CardFirstPage from "../../molecules/card-first-page/CardFirstPage";
import CardSecondPage from "../../molecules/card-second-page/CardSecondPage";
import CardBackCover from "../../molecules/card-back-cover/CardBackCover";

import { useSelector } from "react-redux";
const wrapperVariants = {
  initial: { x: "0" },
  lastPage: { x: "90%" },
};

import { motion } from "framer-motion";
const EditorCard = () => {
  const { pageIndex } = useSelector((state) => state.card);
  return (
    <motion.div
      className={`${styles.card}`}
      variants={wrapperVariants}
      animate={pageIndex === 2 ? "lastPage" : "initial"}
      transition={{ duration: 0.4 }}
    >
      <CardEditorPage
        front={<CardFrontCover />}
        back={<CardFirstPage />}
        pos={0}
      />
      <CardEditorPage
        front={<CardSecondPage />}
        back={<CardBackCover />}
        pos={1}
      />
    </motion.div>
  );
};

export default EditorCard;
