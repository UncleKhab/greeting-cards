import React, { useState } from "react";
import styles from "./TemplateOne.module.css";
import { useSelector } from "react-redux";
import { editIcon } from "./icons";

import TextEditButton from "../../atoms/text-edit-button/TextEditButton";
const TemplateOne = () => {
  const { content } = useSelector((state) => state.card.inside.template);
  const { isEditorOpen } = useSelector((state) => state.editor);
  const [title, setTitle] = useState(content.title);
  const [textContent, setTextContent] = useState(content.textContent);
  const [imageUrl, setImageUrl] = useState(content.imageUrl);

  return (
    <div className="p-8 flex flex-col gap-4">
      <div className="w-full">
        <img src={imageUrl} alt="" className="w-full" />
      </div>
      <h1 className={`${styles.title} relative`}>
        {title}{" "}
        <div className="absolute top-0 right-0">
          {isEditorOpen && (
            <TextEditButton
              icon={editIcon}
              onClick={() => {
                console.log("edit-title");
              }}
            />
          )}
        </div>
      </h1>
      <p className="relative">
        {textContent}
        <div className="absolute top-0 right-0">
          {isEditorOpen && (
            <TextEditButton
              icon={editIcon}
              onClick={() => {
                console.log("edit-title");
              }}
            />
          )}
        </div>
      </p>
    </div>
  );
};

export default TemplateOne;
