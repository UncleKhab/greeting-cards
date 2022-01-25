import styles from "./CardEditor.module.css";
import MenuLayout from "../../components/templates/menu-layout/MenuLayout";
import EditorCard from "../../components/organisms/editor-card/EditorCard";
import { useDispatch } from "react-redux";
import { nextPage, prevPage } from "../../store/editorSlice/editorSlice";
const CardEditorPage = () => {
  const dispatch = useDispatch();
  return (
    <div className={`${styles.wrapper} h-screen`}>
      <div>
        <button onClick={() => dispatch(prevPage())}>prev</button>
        <button onClick={() => dispatch(nextPage())}>next</button>
      </div>
      <div className="h-full bg-gray-100 flex justify-center ">
        <EditorCard />
      </div>
      <MenuLayout />
    </div>
  );
};

export default CardEditorPage;
