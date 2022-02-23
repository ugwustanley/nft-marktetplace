import React from 'react'
import ExploreLink from '@/components/exploreLink/exploreLink'
import {nfts} from '@/mock/media.mock'
import styles from './exploreSection.module.scss'

const ExploreSection = () => {
  return (
    <div className={styles.explore}> 
      <ExploreLink bg={nfts.sampleTwo} height='500px' text="See auctions" />

      <ExploreLink bg={nfts.sampleThree} height="500px" text="Explore the latest drop" />

     <div className={styles.explore__last_link}>
     <ExploreLink bg={nfts.sampleEight} height='100px' text="Secondary marketplace" />
     </div>
    </div>
    
  )
}

export default ExploreSection;