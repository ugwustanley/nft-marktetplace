import React, {ReactElement} from 'react'
import { nfts } from '@/mock/media.mock'
import Navbar from '@/components/navbar/navbar'
import styles from './introSection.module.scss'
type props = {
    showNav: boolean,
    setShowNav: React.Dispatch<React.SetStateAction<boolean>>
}

const IntroSection = ({showNav, setShowNav} : props): ReactElement => {
 
 
  return (
    //   style={{backgroundImage: `url(${nfts.sampleOne})`}}
    <div className={styles.intro} style={{backgroundImage: `linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.65)), url(${nfts.sampleOne})`}} >
        {/* <figure className={styles.intro__background}>
            <img className={styles.intro__background_image} src={nfts.sampleFour} />
            <div className={styles.into__background_overlay}></div>
        </figure> */}
        <Navbar showNav={showNav} setShowNav={setShowNav} />
        introSection
    </div>
  )
}

export default IntroSection;