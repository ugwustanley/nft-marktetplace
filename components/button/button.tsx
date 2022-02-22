import React, { ReactElement} from 'react'
import {ArrowRight} from 'phosphor-react'
import styles from './button.module.scss'

type props = {
  content: string,
  color: string,
  bg: string
}

const Button = ({content, color, bg}:props) : ReactElement => {

  return (
    <button className={styles.button} style={{background:`${bg}`, color:`${color}`}}>
      <p>{content}</p>
      <ArrowRight  size={22} />
    </button>
  )
}

export default Button