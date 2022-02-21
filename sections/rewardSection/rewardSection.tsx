import React from 'react'
import styles from './rewardSection.module.scss'

const RewardSection = () => {
  return (
    <div>Reward
        <p>reward</p>
        <p>reward</p>
        <p>reward</p>
        <p>reward</p>
        <p>reward</p>
        <p>reward</p>
        <p>reward</p>
        <p>reward</p>
        <p>reward</p>
        <p>reward</p>
        {[...Array(20).keys()].map(i => <p>reward</p>)}
    </div>
  )
}

export default RewardSection;