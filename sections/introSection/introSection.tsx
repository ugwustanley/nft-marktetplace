import React, { ReactElement } from "react";
import { nfts } from "@/mock/media.mock";
import { motion } from "framer-motion";
import { introVariant , moveVariant } from "@/variants";
import Marqueetxt from "@/components/marqueetxt/marqueetxt";
import Navbar from "@/components/navbar/navbar";
import Metric from "@/components/metric/metric";
import IntroInfo from '@/components/introInfo/introInfo'
import styles from "./introSection.module.scss";

type props = {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const IntroSection = ({ showNav, setShowNav }: props): ReactElement => {
  return (
    //   style={{backgroundImage: `url(${nfts.sampleOne})`}}
    <div
      className={styles.intro}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(${nfts.sampleOne})`,
      }}
    >
      <motion.div 
      initial={`hidden`}
      animate={`visible`}
      variants={introVariant()}
      className={styles.intro_box}></motion.div>
   
      <Navbar showNav={showNav} setShowNav={setShowNav} />
      <div className={styles.intro__main}>
          
              <Marqueetxt />
          
        <motion.div
        initial={`hidden`}
        animate={`visible`}
         variants={moveVariant(.38)}
         className={styles.intro__info}>
 
              <Metric />
         
          <motion.div variants={moveVariant(.59)} className={styles.intro__txt}>
            <IntroInfo />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroSection;
