import { motion } from "framer-motion";

const WhiteButton = ({ onClick, label }) => {
  return (
    <button
      className="bg-slate-100 font-bold py-2 w-full rounded-xl shadow-xl text-orange-600 text-xl active:bg-white active:shadow-sm sha"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default WhiteButton;
