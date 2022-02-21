import React, { ReactElement } from "react";
import { ArrowRight } from "phosphor-react";
import Marquee from "react-fast-marquee";
import styles from './marqueetxt.module.scss';

const Marqueetxt = (): ReactElement => {
  return (
    <div className={styles.marquee}>
      <Marquee pauseOnHover={true} gradient={false} speed={100}>
       {[...Array(60).keys()].map(i =><span key={i}>PopPeople  <ArrowRight weight="bold" color="hsla(0,0%,100%,.75)" size={102} />    </span>)}
      </Marquee>
    </div>
  );
};

export default Marqueetxt;
