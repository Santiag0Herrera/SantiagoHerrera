import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    }
  }, []);

  return (
    <div className='page'>
      {isMounted && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <h1>Welcome to My Portfolio!</h1>
          <p>I am an optimistic and joyful individual striving for continuous growth and development in both my professional and educational pursuits, as well as in my personal interests. My philosophy is to embrace mistakes as opportunities for learning and growth, rather than fearing them.</p>
        </motion.div>
      )}
    </div>
  )
}

export default Home