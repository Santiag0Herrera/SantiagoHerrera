import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Space } from 'antd';


const ContactInfo = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    }
  }, []);

  return (
    <Space className='page'>
      {isMounted && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <h1>Contact Me</h1>
        </motion.div>
      )}
    </Space>
  )
}

export default ContactInfo