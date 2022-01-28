import React from "react";
import styles from "./CardBackCover.module.css";
const CardBackCover = () => {
  return (
    <div className={`${styles.page} w-full h-full`}>
      <div className={`${styles.borderOne}`}></div>
      <div className={`${styles.borderTwo}`}></div>
      <div className={styles.contentBox}>
        <div className={styles.textAreaWrapper}>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className={styles.textArea}
            placeholder="Write a message here or leave this part empty and it will be hidden"
          ></textarea>
        </div>
        <div className={styles.watermark}>
          <img
            src="/assets/svg/back-cover/BackCoverWaterMark.svg"
            className={styles.watermarkImage}
          />
        </div>
      </div>
    </div>
  );
};

export default CardBackCover;
