import React, {ReactElement} from 'react'
import styles from './footer.module.scss'

const Footer = ():ReactElement => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer__left}>
            <p>Samy Halim ©2022</p>
            <p>Mail</p>
            <p>Twitter</p>
            <p>Pinterest</p>
        </div>
        <div className={styles.footer__right}>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Help</p>
            <div className={styles.footer__credit}>Build by stanley | design by thejelly.io</div>
        </div>
    </div>
  )
}

export default Footer