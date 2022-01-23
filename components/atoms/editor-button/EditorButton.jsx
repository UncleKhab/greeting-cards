import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTab } from "../../../store/editorSlice/editorSlice";
const EditorButton = ({ iconUrl, label }) => {
  const dispatch = useDispatch();
  const currentState = useSelector((state) => state.editor);
  const { tab } = currentState;
  return (
    <button
      className={`${
        tab === label ? "text-black" : "text-white"
      } flex flex-col justify-between items-center gap-2 font-semibold text-white text-sm`}
      onClick={() => dispatch(changeTab(label))}
    >
      <img src={iconUrl} />
      <p>{label}</p>
    </button>
  );
};

export default EditorButton;
