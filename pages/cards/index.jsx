import React from "react";
import ListCard from "../../components/organisms/list-card/ListCard";
import MenuBar from "../../components/organisms/menu-bar/MenuBar";
import styles from "./styles.module.css";
import Link from "next/link";

const index = () => {
  const imageList = [
    "/assets/images/cover1.png",
    "/assets/images/cover2.png",
    "/assets/images/cover3.png",
    "/assets/images/cover4.png",
    "/assets/images/cover3.png",
    "/assets/images/cover1.png",
    "/assets/images/cover2.png",
    "/assets/images/cover4.png",
  ];
  return (
    <div className={`${styles.pageBg}`}>
      <MenuBar />
      <div className="pt-8 pl-2 text-3xl font-bold pb-6 text-slate-600">
        <h1>Valentine's Day Cards</h1>
      </div>
      <div className="grid-cols-2 grid justify-center">
        {imageList.map((item, index) => (
          <ListCard imgSource={item} key={`${item}---${index}`} />
        ))}
      </div>
    </div>
  );
};

export default index;
