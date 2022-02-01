import React from "react";
import styles from "./EditTabs.module.css";
import EditorMenuButton from "../../atoms/editor-menu-button/EditorMenuButton";
import { useSelector } from "react-redux";
import { actionButtonsList } from "./buttonsList";

const EditTabsComponent = () => {
  const { pageIndex } = useSelector((state) => state.card);

  return (
    <div className={`${styles.wrapper} flex justify-around mb-6`}>
      {actionButtonsList[pageIndex].map((item, index) => (
        <EditorMenuButton
          {...item}
          index={index}
          key={`${index}-action-button`}
        />
      ))}
    </div>
  );
};

export default EditTabsComponent;
