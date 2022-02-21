import React, { ReactElement } from "react";
import { nfts } from "@/mock/media.mock";
import { motion } from "framer-motion";
import { introVariant } from "@/variants";
import Marqueetxt from "@/components/marqueetxt/marqueetxt";
import Navbar from "@/components/navbar/navbar";
import Metric from "@/components/metric/metric";
import styles from "./introSection.module.scss";
type props = {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const IntroSection = ({ showNav, setShowNav }: props): ReactElement => {
  return (
    //   style={{backgroundImage: `url(${nfts.sampleOne})`}}
    <motion.div
      initial={`hidden`}
      animate={!showNav ? `visible` : ``}
      variants={introVariant()}
      className={styles.intro}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.75)), url(${nfts.sampleOne})`,
      }}
    >
      {/* <figure className={styles.intro__background}>
            <img className={styles.intro__background_image} src={nfts.sampleFour} />
            <div className={styles.into__background_overlay}></div>
        </figure> */}
      <Navbar showNav={showNav} setShowNav={setShowNav} />
      <div className={styles.intro__main}>
        <Marqueetxt />
        <div className={styles.intro__info}>
          <Metric />
          <Metric />
        </div>
      </div>
    </motion.div>
  );
};

export default IntroSection;
