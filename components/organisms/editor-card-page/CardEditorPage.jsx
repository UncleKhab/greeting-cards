import { useEffect, useState } from "react";
import { nextPage, prevPage } from "../../../store/cardSlice/cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion, useCycle } from "framer-motion";
import styles from "./CardEditorPage.module.css";

const CardEditorPage = ({ front, back, pos }) => {
  const { pageIndex } = useSelector((state) => state.card);
  const dispatch = useDispatch();
  const [zIndex, setZIndex] = useState(0);
  const [display, setDisplay] = useState("unset");
  const [flipAngle, cycleFlipAngle] = useCycle("0", "-180deg");
  const handleNext = (e) => {
    console.log(flipAngle);
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
  useEffect(() => {
    if (pageIndex === 0 && pos === 0) {
      setZIndex(2);
    }
    if (pageIndex >= pos) {
      setTimeout(() => {
        setZIndex(2);
      }, 800);
    }
    if (pageIndex !== pos) {
      setTimeout(() => {
        setZIndex(pos);
      }, 800);
    }
    if (pageIndex > pos + 1) {
      setTimeout(() => {
        setDisplay("none");
      }, 1500);
    } else {
      setDisplay("unset");
    }
  }, [pageIndex]);

  return (
    <>
      <motion.div
        className={styles.page}
        transition={{
          delay: 0.5,
          x: { type: "spring", stiffness: 75 },
          default: { duration: 0.3 },
        }}
        onTap={handleNext}
        style={{ zIndex: zIndex, display: display }}
        initial={{ rotateY: 0 }}
        animate={{
          rotateY: flipAngle,
        }}
      >
        <div className={styles.face}>{front}</div>
        <div className={`${styles.face} ${styles.backface}`}>{back}</div>
      </motion.div>
    </>
  );
};

export default CardEditorPage;
