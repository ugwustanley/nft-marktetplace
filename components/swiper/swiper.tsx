import React, { useState ,  ReactElement } from "react";
import Button from "../button/button";
import styles from "./swiper.module.scss";
import { nfts } from '@/mock/media.mock'

const Swiper = (): ReactElement => {
    const images = [nfts.sampleOne , nfts.sampleTwo , nfts.sampleThree]
    
    const items = [{
        name: "JUlia",
        image: nfts.sampleOne, 
    },
    {
        name: "JUlliet",
        image: nfts.sampleTwo, 
    },
    {
        name: "JUlitalia",
        image: nfts.sampleThree, 
    }
   ]
   const [active , setActive] = useState(items[0])
   const [index , setIndex] = useState(0)
 
   setInterval(() => { console.log('hello')}, 3000)
    // style={{
    //     backgroundImage: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(${nfts.sampleOne})`,
    //   }}
    //style={{backgroundImage:`${nfts.sampleOne}`}}
  return (

    <div className={styles.swiper} >
      <div className={styles.swiper__pick} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${nfts.sampleOne})`}} >
          <p className={styles.swiper__pick_tag}>Top picks✨</p>

          <div className={styles.swiper__pick_info}>
              <div className={styles.swiper__pick_links}>
                  {items.map((item:any, index:number) => <img className={styles.swiper__pick_link} src={`${item.image}`}/>)}
              </div>
              <h2>Julia</h2>
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
