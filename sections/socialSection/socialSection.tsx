import React from "react";
import IntroInfo from "@/components/introInfo/introInfo";
import styles from "./socialSection.module.scss";

const SocialSection = () => {
  return (
    <div className={styles.social}>
      <div className={styles.info}>
        <IntroInfo />
      </div>
      <div
          className={styles.social__info}
        >
          <p>Social Media</p>
          <div className={styles.social__links}>
              <p>Mail</p>
              <p>Twitter</p>
              <p>Pinterest</p>
          </div>
        </div>
    </div>
  );
};

export default SocialSection;
