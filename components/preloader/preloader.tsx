import React, {ReactElement} from 'react'
import {loaderVariant, textVariant} from '@/variants/index'
import {motion} from 'framer-motion'
import styles from './preloader.module.scss'
const Preloader = ():ReactElement => {
  return (
    <motion.div
    initial={`hidden`}
    animate={ `visible`}
    exit={'exit'}
    variants={loaderVariant()}
     className={styles.preloader}>
        <div>
            <motion.p variants={textVariant(.3)} >
            &apos; My aim is to omit everything
            </motion.p>
            <motion.p variants={textVariant(.4)} >
                superfluous so that the essential
            </motion.p>
            <motion.p variants={textVariant(.5)} >
              is shown to the best possible
            </motion.p>
            <motion.p variants={textVariant(.6)} >
               advantage.&apos; - Dieter Rams
            </motion.p>

        </div>
    </motion.div>
  )
}

export default Preloader