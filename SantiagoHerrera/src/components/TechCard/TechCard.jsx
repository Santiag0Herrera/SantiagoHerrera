import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { useGlobalContext } from '../../Context/context';
import { Card } from 'antd';
import {
  StarFilled,
  StarOutlined
} from '@ant-design/icons';

const TechCard = ({ data, delay }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { state } = useGlobalContext();

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { delay } },
  };

  const {name, level} = data

  const cardStyles = {
    border: `2px dashed ${!(state.theme === 'light') ? '#e9dfce' : '#1e2125'}`,
    background: 'transparent',
    color: !(state.theme === 'light') ? '#e9dfce' : '#1e2125',
    width: '160px',
    display: 'flex',
    flexDireciton: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap',
  }

  const renderElements = () => {
    const elements = [];
    for (let i = 0; i < 5; i++) {
      if(i < level)  elements.push(<StarFilled />)
      if(i >= level) elements.push(<StarOutlined />)
    }
    return elements;
  };

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    }
  }, [])

  return (
    <AnimatePresence>
      {isMounted &&
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <Card
            style={cardStyles}
            bodyStyle={{padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
          >
            <h3 style={{padding: 0, margin: 0}}>{name}</h3>
            <div>
              {renderElements()}
            </div>
          </Card>
        </motion.div>
      }
    </AnimatePresence>
  )
}

export default TechCard;