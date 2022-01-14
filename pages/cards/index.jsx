import React from "react";
import ListCard from "../../components/atoms/list-card/ListCard";
import MenuBar from "../../components/molecules/menu-bar/MenuBar";
import styles from "./styles.module.css";

const index = () => {
  const imageList = ['/assets/images/card-cover2.png', '/assets/images/card-cover2.png', '/assets/images/card-cover2.png','/assets/images/card-cover2.png','/assets/images/card-cover2.png','/assets/images/card-cover2.png','/assets/images/card-cover2.png','/assets/images/card-cover2.png','/assets/images/card-cover2.png','/assets/images/card-cover2.png','/assets/images/card-cover2.png','/assets/images/card-cover2.png','/assets/images/card-cover2.png']
  return (
    <div className={`${styles.pageBg}`}>
      <MenuBar />
      <div className="pt-8 pl-2 text-3xl font-bold pb-6 text-slate-600">
        <h1>
          Valentine's Day Cards
        </h1>
      </div>
      <div className="grid-cols-2 grid justify-center">
        {imageList.map((item, index )=> <ListCard imgSource={item} key={`${item}---${index}`}/>)}
      </div>
    </div>
  );
};

export default index;
