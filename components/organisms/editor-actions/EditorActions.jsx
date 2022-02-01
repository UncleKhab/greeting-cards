import React from "react";
import styles from "./EditorActions.module.css";

// STORE
import { useSelector, useDispatch } from "react-redux";
import { setInside } from "../../../store/cardSlice/cardSlice";

// ACTION LIST
import { actionsList, actionMap } from "./actionsList";

// BUTTONS
import IconLabelButton from "../../atoms/icon-label-button/IconLabelButton";
import TemplateButton from "../../atoms/template-button/TemplateButton";

const EditorActions = () => {
  const { pageIndex } = useSelector((state) => state.card);
  const { tab } = useSelector((state) => state.editor);
  const actionPage = actionMap[pageIndex];
  const iconSet = actionsList[actionPage][tab];

  const dispatch = useDispatch();

  const handleDispatch = (index) => {
    switch (actionPage) {
      case "inside":
        dispatch(setInside({ tab: tab, value: index }));
        break;
      default:
        break;
    }
  };

  const renderButtons = () => {
    if (pageIndex === 1) {
      if (tab === 0) {
        return iconSet.map((item, index) => (
          <TemplateButton
            {...item}
            key={index + "action-button"}
            onClick={() => handleDispatch(index)}
          />
        ));
      }
    }
    return iconSet.map((item, index) => (
      <IconLabelButton {...item} key={index + "action-button"} />
    ));
  };

  return (
    <div className={`${styles.wrapper} mb-4 flex justify-around gap-5`}>
      {renderButtons()}
    </div>
  );
};

export default EditorActions;
