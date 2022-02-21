import React, { ReactElement } from "react";
import styles from "./mobNav.module.scss";
import { X } from 'phosphor-react'

type props = {
    showNav: boolean,
    setShowNav: React.Dispatch<React.SetStateAction<boolean>>
}

const MobNav = ({showNav , setShowNav}: props): ReactElement => {

    
 // {[...Array(60).keys()].map(i => <p>reward</p>)}
  return (
    <div className={styles.mobnav}>
      <div className={styles.mobnav__main}>
     
        <div
          className={styles.mobnav__close}
          onClick={() => {setShowNav(!showNav)}}
        >
          <p>Close</p>
          <X size={17} />
        </div>

      </div>
    </div>
  );
};

export default MobNav;
