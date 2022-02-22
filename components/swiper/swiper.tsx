import React, { useState, useEffect, useRef,  ReactElement } from "react";
import Button from "../button/button";
import styles from "./swiper.module.scss";
import { nfts } from "@/mock/media.mock";

const Swiper = (): ReactElement => {

  const images = [nfts.sampleOne, nfts.sampleTwo, nfts.sampleThree];

  type Iitem = {
    name:string,
    image:string
  }

  const items: Iitem[] = [
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
  const [active, setActive] = useState<Iitem>(items[0]);

  const [index, setIndex] = useState<number>(0);

  const swiperRef = useRef<HTMLDivElement>(null)

  const I0Ref = useRef<HTMLImageElement>(null)

  const I1Ref = useRef<HTMLImageElement>(null)

  const I2Ref = useRef<HTMLImageElement>(null)

  const [refs , setRefs] = useState<any>([I0Ref , I1Ref, I2Ref])

  //console.log(refs)



  useEffect(
    ():any =>{
        const interval = setInterval(() => {
        console.log("called")
        refs[index].current.style.borderRadius = '50%';
        swiperRef.current!.classList?.add(styles['bg-anime']);
        
        if(index == 2){
             setIndex(0)
             setActive(items[0])
            //  refs[0].current.style.borderRadius = '50%';
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
            {/* {items.map((item: any, index: number) => (
              <img
                key={index}
                ref={I`${index}`Ref}
                className={styles.swiper__pick_link}
                src={`${item.image}`}
              />
            ))} */}
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
