import React from "react";
import styles from "./IconLabelButton.module.css";

const IconLabelButton = ({ iconSrc, label, action }) => {
  return (
    <button
      className={`${styles.box} flex flex-col justify-center items-center flex-1 py-3`}
      onClick={action}
    >
      <img src={iconSrc} className={styles.icon} />
      <p>{label}</p>
    </button>
  );
};

export default IconLabelButton;
