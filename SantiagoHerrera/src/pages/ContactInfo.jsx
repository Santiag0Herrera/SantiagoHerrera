import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Space, Card } from 'antd';
import { contactInfoData } from '../data/data'
import { useGlobalContext } from '../Context/context';
import {
  GithubOutlined,
  LinkedinFilled,
  PhoneFilled,
  MailFilled,
  EnvironmentFilled
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const ContactInfo = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const { linkedIn, phoneNumber, email, location, github } = contactInfoData
  const { state } = useGlobalContext();

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const iconStyle = {
    fontSize: '20px',
    marginRight: '10px'
  }

  const linkStyle = {
    color: state.theme === 'light' ? '#e9dfce' : '#1e2125',
  }

  const cardStyles = {
    border: `4px solid grey`,
    background: state.theme === 'light' ? '#1e2125' : '#e9dfce',
    color: state.theme === 'light' ? '#e9dfce' : '#1e2125',
    margin: '20px',
    width: '60vw',
    position: isHover && 'relative',
    bottom: isHover && '3px',
    left: isHover && '3px',
    boxShadow: isHover && '-5px 5px 5px #474747'
  }

  const cardContentStyle = {
    display: 'flex',
    flexDirection: 'column'
  }

  useEffect(()=>{
    window.screen.width > 1000 ? setCollapse(false) : setCollapse(true)
}, [window.screen.width])

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
          <Card
            style={cardStyles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div style={cardContentStyle}>
              <h2>Santiago Herrera</h2>
              <ul>
                <li><Link style={linkStyle} to={github}><GithubOutlined style={iconStyle} />{collapse ? 'GitHub' : github}</Link></li>
                <li><Link style={linkStyle} to={linkedIn}><LinkedinFilled style={iconStyle} />{collapse ? 'LinkedIn' : linkedIn}</Link></li>
                <li><Link style={linkStyle} to={'https://wa.me/1134088301'}><PhoneFilled style={iconStyle} />{collapse ? 'WhatsApp' : phoneNumber}</Link></li>
                <li><Link style={linkStyle} to={`mailto:${email}`}><MailFilled style={iconStyle} />{collapse ? 'Email' : email}</Link></li>
                <li><EnvironmentFilled style={iconStyle} />{location}</li>
              </ul>
            </div>
          </Card>
        </motion.div>
      )}
    </Space>
  )
}

export default ContactInfo