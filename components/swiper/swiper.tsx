import React, { useState, useEffect, useRef, ReactElement } from "react";
import Button from "../button/button";
import styles from "./swiper.module.scss";
import { motion } from "framer-motion";
import { swipeVariant} from '@/variants/index';
import items from '@/mock/items.mock'


const Swiper = (): ReactElement => {

  // const images = [nfts.sampleFive, nfts.sampleSix, nfts.sampleSeven];

  const [active, setActive] = useState<any>(items[0]);

  const [index, setIndex] = useState<number>(-1);

  const [roll , setRoll] = useState<boolean>(false)

  const swiperRef = useRef<HTMLDivElement>(null);

  const ringRef = useRef<SVGSVGElement>(null);

  const I0Ref = useRef<HTMLImageElement>(null);

  const I1Ref = useRef<HTMLImageElement>(null);

  const I2Ref = useRef<HTMLImageElement>(null);

  const [refs, setRefs] = useState<any>([I0Ref, I1Ref, I2Ref]);

  
  useEffect(() => {
    refs[0].current.style.borderRadius = "50%";
  }, []);

  useEffect((): any => {

    const interval = setInterval(() => {

      items.forEach((item, i) => {
        refs[i].current.style.borderRadius = "10px";
      });
  
      swiperRef.current!.classList?.add(styles["bg-anime"]);
     
      setTimeout(() => {
        setRoll(true)
      }, 500);

      if(index == 0){
        ringRef.current!.style.left = "55.7px";
      }

      if(index == 1){
        ringRef.current!.style.left = "115.7px";
      }

      if (index == 2) {
        setIndex(0);
        setActive(items[0]);
        refs[0].current.style.borderRadius = "50%";
        ringRef.current!.style.left = "-4.7px";
        
      } 
      
      else {
        setIndex(index + 1);
        setActive(items[index + 1]);
        refs[index + 1].current.style.borderRadius = "50%";
       
      }

      setTimeout(() => {
;        swiperRef.current!.classList?.remove(styles["bg-anime"])
        setRoll(false)
      }, 2000);
     
     
    }, 6000);

    return () => clearInterval(interval);
  }, [index]);



  return (
    <div className={styles.swiper}>
      <div className={styles.swiper__pick}>
        <div
          className={styles.swiper__pick_static}
          ref={swiperRef}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${active.image})`,
          }}
        ></div>
        <p className={styles.swiper__pick_tag}>Top picks✨</p>

        <div className={styles.swiper__pick_info}>
          <div className={styles.swiper__pick_links}>
            <img
              ref={I0Ref}
              className={styles.swiper__pick_link}
              src={`${items[0].image}`}
            />
            <img
              ref={I1Ref}
              className={styles.swiper__pick_link}
              src={`${items[1].image}`}
            />
            <img
              ref={I2Ref}
              className={styles.swiper__pick_link}
              src={`${items[2].image}`}
            />
            <svg
              ref={ringRef}
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                initial={`hidden`}
                animate={!roll ? `visible` : ``}
                variants={swipeVariant()}
                cx="30"
                cy="30"
                r="29"
                stroke="white"
                stroke-width="2"
              />
            </svg>

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
