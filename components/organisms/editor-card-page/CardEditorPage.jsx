import { nextPage, prevPage } from "../../../store/editorSlice/editorSlice";
import { useDispatch } from "react-redux";
import { motion, useCycle } from "framer-motion";
import styles from "./CardEditorPage.module.css";

const CardEditorPage = ({ front, back }) => {
  const dispatch = useDispatch();
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
      <div className={styles.face}>{front}</div>
      <div className={`${styles.face} ${styles.backface}`}>{back}</div>
    </motion.div>
  );
};

export default CardEditorPage;
