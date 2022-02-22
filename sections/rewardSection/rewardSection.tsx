import React, {ReactElement} from 'react'
import Swiper from '@/components/swiper/swiper'

import styles from './rewardSection.module.scss'

const RewardSection = ():ReactElement => {
  return (
    <div className={styles.rewards}>
      <div>Rewards</div>

      <Swiper />
      
    </div>
  )
}

export default RewardSection;