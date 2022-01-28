import styles from "./CardEditor.module.css";
import MenuLayout from "../../components/templates/menu-layout/MenuLayout";
import EditorCard from "../../components/organisms/editor-card/EditorCard";
import MenuBar from "../../components/organisms/menu-bar/MenuBar";
const CardEditorPage = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <MenuBar />
      <div className="h-full bg-gray-100 overflow-hidden">
        <EditorCard />
      </div>
      <MenuLayout />
    </div>
  );
};

export default CardEditorPage;
