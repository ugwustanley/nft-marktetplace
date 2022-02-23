import React, {ReactElement} from 'react'
import {ArrowRight} from 'phosphor-react'
import styles from './exploreLink.module.scss';

type props = {
    bg: string,
    height:string
    text:string
}

const ExploreLink = ({bg, height, text}:props): ReactElement => {
  return (
    <div className={styles.explorelink} 
    style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${bg})`,
        minHeight: `${height}`,
      }}>
        <div className={styles.explorelink__info}>
               <h2>{text}</h2>
               <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><polyline points="144 56 216 128 144 200" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline></svg>
        </div>
    </div>
  )
}

export default ExploreLink;