import React, { useState, useEffect, useRef,  ReactElement } from "react";
import Button from "../button/button";
import styles from "./swiper.module.scss";
import { nfts } from "@/mock/media.mock";

const Swiper = (): ReactElement => {

  const images = [nfts.sampleOne, nfts.sampleTwo, nfts.sampleThree];

  const items = [
    {
      name: "Julia",
      image: nfts.sampleOne,
    },
    {
      name: "Jim",
      image: nfts.sampleTwo,
    },
    {
      name: "Janet",
      image: nfts.sampleThree,
    },
  ];
  const [active, setActive] = useState(items[0]);

  const [index, setIndex] = useState(0);

  const swiperRef = useRef<HTMLDivElement>(null)

  //    setInterval(() => {
  //       if(index == 2){
  //         //    setIndex(0)
  //            setActive(items[0])
  //       }else{
  //           setIndex(index + 1)
  //           setActive(items[index + 1])
  //       }
  //    }, 30000)

  useEffect(
    ():any =>{
        const interval = setInterval(() => {
        console.log("called")
        swiperRef.current!.classList?.add(styles['bg-anime']);
        if(index == 2){
             setIndex(0)
             setActive(items[0])
        }else{
            setIndex(index + 1)
            setActive(items[index + 1])
        }
      
        setTimeout(() => {swiperRef.current!.classList?.remove(styles['bg-anime'])}, 2000)

     }, 3000)

     return () =>  clearInterval(interval)
     
},[index]
  );

  return (
    <div className={styles.swiper}>
      <div
        ref = {swiperRef}
        className={styles.swiper__pick}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${active.image})`,
        }}
      >
        <p className={styles.swiper__pick_tag}>Top picks✨</p>

        <div className={styles.swiper__pick_info}>
          <div className={styles.swiper__pick_links}>
            {items.map((item: any, index: number) => (
              <img
                key={index}
                className={styles.swiper__pick_link}
                src={`${item.image}`}
              />
            ))}
          </div>
          <h2>{active.name}</h2>
          <p>1 editions</p>
        </div>
      </div>
      <div className={styles.swiper__btns}>
        <Button content="Buy for 170 METIC" bg="#ff006b" color="#fff" />
        <Button content="See all items on sale" bg="#f9ecf1" color="#0d0d0d" />
      </div>
    </div>
  );
};

export default Swiper;
