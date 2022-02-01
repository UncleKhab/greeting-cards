import React from "react";
import styles from "./TextEditButton.module.css";
const TextEditButton = () => {
  return (
    <button className={styles.editButton}>
      <img src="/assets/svg/edit-pen.svg" alt="" />
    </button>
  );
};

export default TextEditButton;
