import React, { ReactElement} from 'react'
import styles from './loginButton.module.scss'

const LoginButton = ({}) : ReactElement => {
  return (
    <button className={styles.login}>
        Sign In
    </button>
  )
}

export default LoginButton