import React, { ReactElement, useRef, useEffect , useState } from "react";
import Swiper from "@/components/swiper/swiper";
import useOnScreen from '@/hooks/onScreen'
import { motion } from 'framer-motion'
import {divVariant , introVariant} from '@/variants/index'
import {user} from '@/mock/media.mock'
import styles from "./rewardSection.module.scss";

const RewardSection = (): ReactElement => {

  const swipeRef = useRef<HTMLDivElement>(null);

  const rewardRef = useRef<any>(null);

  const reward2Ref = useRef<HTMLDivElement>(null);
  
 
  const isVisibleReward = useOnScreen(rewardRef)

  const isVisibleReward2 = useOnScreen(reward2Ref)

  if(isVisibleReward2){
    swipeRef.current!.classList?.add(styles["rewards__swiper"])
  }
  if(isVisibleReward){
    swipeRef.current!.classList?.remove(styles["rewards__swiper"])
    swipeRef.current!.style.alignSelf = "flex-end"
    swipeRef.current!.style.transition = "1s"
  }
  if(!isVisibleReward && !isVisibleReward2){
    if(swipeRef.current){
       // swipeRef.current!.style.position = "relative"
    swipeRef.current?.classList?.remove(styles["rewards__swiper"])
    swipeRef.current!.style.transition = "1s"
    swipeRef.current!.style.alignSelf = "flex-start"
    }
  }

 
   
// viewport={{ once: true }}
  return (
    <motion.div
      initial={`hidden`}
      animate={ `visible`}
      
      className={styles.rewards}>
      <div className={styles.rewards__info}>
        <div className={styles.rewards__heading}>
          <h2>Rewards & Perks</h2>
          <p>
            By owning a token in this collection you get some of the benefits
            listed below. Terms & Conditions apply.
          </p>
        </div>
        <div className={styles.rewards__items}>

          <motion.div 
            viewport={{ once: false }}
            variants={divVariant(.1)}
            className={styles.rewards__item}>
            <h2>01</h2>
            <div>
              <h3>Collectors early access on future projects</h3>
              <p>You get preferential treatment on future drops from Samy Halim. This also means you get better deals when he collaborates with other brands.
              </p>
            </div>
          </motion.div>

          <motion.div
          viewport={{ once: false }}
          variants={divVariant(.2)}
           className={styles.rewards__item}  >
            <h2>02</h2>
            <div>
              <h3>Access to monthly, collectors-only streams</h3>
              <p>You get access to a (at-least) monthly livestream where Samy talks about his upcoming projects; co-creates some art with you, and shares tips and advice.</p>
            </div>
          </motion.div>

          <motion.div
          viewport={{ once: false }}
          variants={divVariant(.3)}
           className={styles.rewards__item} ref={reward2Ref}>
            <h2>03</h2>
            <div>
              <h3>Signed poster</h3>
              <p>We will try to ship you a poster of your NFT with one of the 7 weathers. This also depends on where you are located though.</p>
            </div>
          </motion.div>

          <motion.div 
          viewport={{ once: false }}
          variants={divVariant(.4)}
          className={styles.rewards__item}>
            <h2>04</h2>
            <div>
              <h3>Commercial rights</h3>
              <p>The NFT you buy grants you full commercial rights over the artwork that is part of your NFT.</p>
            </div>
          </motion.div>

          <motion.div 
          viewport={{ once: false }}
          variants={divVariant(.5)}
          className={styles.rewards__item}>
            <h2>05</h2>
            <div>
              <h3>Access to an exclusive art contest</h3>
              <p>The winner gets to design how PopPeople character #1501 will look like, and will get to collaborate with Samy on future projects.</p>
            </div>
          </motion.div>

          <motion.div 
          viewport={{ once: false }}
          variants={divVariant(.6)}
          className={styles.rewards__item}>
            <h2>06</h2>
            <div>
              <h3>Chance of receiving secret PopPeople NFTs</h3>
              <p>Early buyers get the chance to receive unreleased PopPeople NFTs via Airdrop at a later point in time.</p>
            </div>
          </motion.div>
         
         <img  ref={rewardRef}  src={user.signature} alt="signature"/>

        </div>
      </div>

      <div ref={swipeRef} >
      <Swiper />
      </div>
    </motion.div>
  );
};

export default RewardSection;
