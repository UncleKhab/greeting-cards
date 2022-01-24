import styles from "./ListCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { setFrontCover } from "../../../store/cardSlice/cardSlice";

const ListCard = ({ imgSource }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = (e) => {
    dispatch(setFrontCover(imgSource));
    router.push("/card-editor");
  };
  return (
    <div onClick={handleClick}>
      <div className="flex flex-col justify-center items-center z-10">
        <div className="w-fit z-20">
          <img src={imgSource} alt="img-greeting-cover" />
        </div>
        <div className="bg-white p-4 pt-10 z-10 relative -top-10  m-2">
          <h3 className="text-xs font-bold text-slate-800">
            Happy Valentine's Day
          </h3>
          <p className="text-xs">
            Amazing cover designed especially for Valentine's Day
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
