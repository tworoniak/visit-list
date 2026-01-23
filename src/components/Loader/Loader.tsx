// import "./Loader.module.scss";

// const Loader = () => {
//   return (
//     <div className='loader'>
//       <div className='spinner'></div>
//       <p>Loading...</p>
//     </div>
//   );
// };

// export default Loader;

"use client";

import { motion } from "motion/react";
import type { Variants } from "motion/react";

function Loader() {
  const dotVariants: Variants = {
    jump: {
      transform: "translateY(-30px)",
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      animate='jump'
      transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
      className='container'
    >
      <motion.div className='dot' variants={dotVariants} />
      <motion.div className='dot' variants={dotVariants} />
      <motion.div className='dot' variants={dotVariants} />
      <StyleSheet />
    </motion.div>
  );
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
  return (
    <style>
      {`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                margin-top: 3rem;
            }

            .dot {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: #3064dc;
                will-change: transform;
            }
            `}
    </style>
  );
}

export default Loader;
