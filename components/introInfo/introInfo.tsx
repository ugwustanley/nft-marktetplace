import React, { ReactElement } from 'react';
import styles  from './introInfo.module.scss'
import { ArrowDown } from 'phosphor-react'

const IntroInfo = () => {
  return (
    <div className={styles.introinfo}>
       <p>Colors and shapes working together to create bold portraits of bold personalities – that is the formula for Samy Halim’s PopPeople. 1500 NFTs, 1500 unique characters; each one adapting and changing based on the current weather. Showing off is highly encouraged.</p>
       <div className={styles.introinfo__scroll}> 
           <p>Scroll Down</p>
           <ArrowDown size={22} />
       </div>
    </div>
  )
}

export default IntroInfo