import { nextPage, prevPage } from "../../../store/editorSlice/editorSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion, useCycle } from "framer-motion";
import styles from "./CardEditorPage.module.css";
import CardFrontCover from "../../molecules/card-front-cover/CardFrontCover";

const CardEditorPage = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.editor);
  const [flipAngle, cycleFlipAngle] = useCycle("0", "-180deg");
  const onTap = () => {
    cycleFlipAngle();
    switch (flipAngle) {
      case "0":
        dispatch(nextPage());
        break;
      default:
        dispatch(prevPage());
        break;
    }
  };
  return (
    <motion.div
      className={styles.page}
      transition={{
        delay: 0.5,
        x: { type: "spring", stiffness: 75 },
        default: { duration: 0.3 },
      }}
      onTap={onTap}
      initial={{ rotateY: 0, zIndex: 0 }}
      animate={{
        rotateY: flipAngle,
      }}
    >
      <div className={styles.face}>{page === 0 && <CardFrontCover />}</div>
      <div className={`${styles.face} ${styles.backface}`}></div>
    </motion.div>
  );
};

export default CardEditorPage;
