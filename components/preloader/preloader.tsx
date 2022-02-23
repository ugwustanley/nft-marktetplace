import React, { ReactElement, useState } from "react";
import { loaderVariant, textVariant } from "@/variants/index";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./preloader.module.scss";
const Preloader = (): ReactElement => {
  const [hideTxt, setHideTxt] = useState(false);

  setTimeout(() => {
      setHideTxt(true)
  } , 3000)
  return (
    <motion.div
      initial={`hidden`}
      animate={`visible`}
      exit={"exit"}
      variants={loaderVariant()}
      className={styles.preloader}
    >
        <div>
      <AnimatePresence exitBeforeEnter>
        
         {true && <div>  
             <motion.p  variants={textVariant(0.3)}>
            &apos; My aim is to omit everything
          </motion.p>
           <motion.p variants={textVariant(0.4)}>
            superfluous so that the essential
          </motion.p>
            <motion.p variants={textVariant(0.5)}>
            is shown to the best possible
          </motion.p>
            <motion.p variants={textVariant(0.6)}>
            advantage.&apos; - Dieter Rams
          </motion.p>
         </div>
}
       
      </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Preloader;
