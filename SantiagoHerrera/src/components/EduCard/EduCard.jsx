import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { useGlobalContext } from '../../Context/context';
import { Card, Divider } from 'antd';
import {
  ShopFilled,
  BookFilled,
  ClockCircleFilled,
  CalendarFilled
} from '@ant-design/icons';

const EduCard = ({ data, delay }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const { state } = useGlobalContext();
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { delay } },
  };

  const { institution, degree, fieldOfStudy, period, actual } = data


  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const cardStyles = {
    border: `4px solid grey`,
    background: state.theme === 'light' ? '#1e2125' : '#e9dfce',
    color: state.theme === 'light' ? '#e9dfce' : '#1e2125',
    margin: '20px 0',
    maxWidth: '700px',
    position: isHover && 'relative',
    bottom: isHover && '3px',
    left: isHover && '3px',
    boxShadow: isHover && '-5px 5px 5px #474747'
  }

  const dividerStyle = { 
    color: 'grey',
    borderColor: 'grey', 
    fontSize: '10px', 
    fontWeight: '250' 
  }

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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className='cardContent'>
              <h2 style={{textAlign: 'center'}}>{degree.toUpperCase()}</h2>
              <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap:'20px'}}>
                {actual && <Divider dashed style={dividerStyle}>Still in Course</Divider>}
                <p><ShopFilled /> {institution}</p>
                <p><BookFilled /> {fieldOfStudy}</p>
                <p><ClockCircleFilled /> {period}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      }
    </AnimatePresence>
  )
}

export default EduCard;