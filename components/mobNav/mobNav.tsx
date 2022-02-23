import React, { ReactElement } from "react";
import { motion } from 'framer-motion';
import { navVariant } from '@/variants'
import styles from "./mobNav.module.scss";
import { X } from "phosphor-react";

type props = {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobNav = ({ showNav, setShowNav }: props): ReactElement => {
  // {[...Array(60).keys()].map(i => <p>reward</p>)}
  return (
    <div className={styles.mobnav}>
      <div className={styles.mobnav__main}>
        <div
          className={styles.mobnav__close}
          onClick={() => {
            setShowNav(!showNav);
          }}
        >
          <p>Close</p>
          <X size={17} />
        </div>

        <motion.li
           initial={`hidden`}
           animate={showNav ? `visible` : ``}
           variants={navVariant()}
           className={styles.mobnav__links}>
              <ul className={styles.mobnav__link}>Home</ul> 
              <ul className={styles.mobnav__link}>Latest drop</ul> 
              <ul className={styles.mobnav__link}>Auction</ul>  
              <ul className={styles.mobnav__link}>Marketplace</ul> 
              <ul className={styles.mobnav__link}>Your profile</ul> 
              <ul className={`${styles.mobnav__link} ${styles.mobnav__link_small}`}>Terms of Service</ul>   
              <ul className={`${styles.mobnav__link} ${styles.mobnav__link_small}`}>Privacy Policy</ul> 
              <ul className={`${styles.mobnav__link} ${styles.mobnav__link_small}`}>Help</ul>      
        </motion.li>

        <div className={styles.mobnav__credit}>Build by stanley | design by thejelly.io</div>
      </div>
    </div>
  );
};

export default MobNav;
