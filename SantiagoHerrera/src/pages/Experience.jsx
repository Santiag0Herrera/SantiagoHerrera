import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { experience } from '../data/data';
import ExpCard from '../components/Card/Card';

const Experience = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    setLoading(false)
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
          transition={{ ease: 'easeInOut' }}
          style={{width: '100%'}}
        >
          <h1>Experience</h1>       
          {experience.map((e, index) => {
            return <ExpCard data={e} key={index} loading={loading} delay={index * 0.1}/>
          })} 
        </motion.div>
      )}
    </div>
  )
}

export default Experience