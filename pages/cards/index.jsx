import React from "react";
import MenuBar from "../../components/molecules/menu-bar/MenuBar";
import styles from "./styles.module.css";

const index = () => {
  return (
    <div className={`${styles.pageBg} h-screen`}>
      <MenuBar />
    </div>
  );
};

export default index;
