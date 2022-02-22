import React, { ReactElement } from "react";
import { ArrowRight } from "phosphor-react";
import styles from "./metric.module.scss";

const Metric = (): ReactElement => {
  return (
    <div className={styles.metric}>
        <p className={styles.metric__ts}>Token sale</p>
      <div className={styles.metric__info}>

        
        <div className={styles.metric__sales}>
          <h3>170 MATIC</h3>
          <p>floor price</p>
        </div>
        <div className={styles.metric__tokens}>
          <h3>95</h3>
          <p>tokens</p>
        </div>
      </div>
      <div className={styles.metric__link}>
        <p>See item on sale</p>
        <span>
          <ArrowRight size={20} weight="bold" />
        </span>
      </div>
    </div>
  );
};

export default Metric;
