import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { useGlobalContext } from '../../Context/context';
import { Skeleton, Card, Divider, Button } from 'antd';
import {
  ShopFilled,
  EnvironmentFilled,
  ClockCircleFilled,
  CalendarFilled
} from '@ant-design/icons';

const ExpCard = ({ data, loading, delay }) => {
  const { position, company, employmentType, period, duration, location, skills } = data
  const [isMounted, setIsMounted] = useState(false);
  const { state } = useGlobalContext();
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { delay } },
  };

  const [isHover, setIsHover] = useState(false);
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

  const skillsStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    flexWrap: 'wrap',
  }

  const skillStyle = {
    borderColor: state.theme === 'light' ? '#e9dfce' : '#1e2125',
    backgroundColor: 'transparent',
    color: state.theme === 'light' ? '#e9dfce' : '#1e2125',
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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Skeleton loading={loading} active className='card-content'>
              <div className='cardContent'>
                <h2>{position.toUpperCase()}</h2>
                <p><ShopFilled /> {company}</p>
                <p><ClockCircleFilled /> {employmentType}</p>
                <p><CalendarFilled /> {period}</p>
                <p><EnvironmentFilled /> {location}</p>
              </div>
              <Divider dashed style={dividerStyle}>
                Tecnologies
              </Divider>
              <div style={skillsStyle}>
                {skills.map(s => <Button style={skillStyle} type="dashed">{s}</Button>)}
              </div>
            </Skeleton>
          </Card>
        </motion.div>
      }
    </AnimatePresence>
  )
}

export default ExpCard;