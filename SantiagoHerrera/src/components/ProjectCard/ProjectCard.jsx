import React, { useEffect, useState } from 'react'
import { Button, Card, Avatar, Divider } from 'antd';
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from "framer-motion";
import { useGlobalContext } from '../../Context/context'
import {
  GithubOutlined,
  AppstoreOutlined
} from '@ant-design/icons';

const ProjectCard = ({ data, delay, course, project }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const { state } = useGlobalContext();

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { delay } },
  };

  const cardStyles = {
    border: `3px solid ${state.theme === 'light' ? '#1e2125' : '#e9dfce'}`,
    background: state.theme === 'light' ? '#1e2125' : '#e9dfce',
    color: state.theme === 'light' ? '#e9dfce' : '#1e2125',
    position: isHover && 'relative',
    bottom: isHover && '3px',
    left: isHover && '3px',
    boxShadow: isHover && '-5px 5px 5px #474747'
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

  const dividerStyle = { 
    color: 'grey',
    borderColor: 'grey', 
    fontSize: '10px', 
    fontWeight: '250' 
  }

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
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
            className='card'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Avatar src={state.theme === 'light' ? '/assets/coding-light.svg' : '/assets/coding-dark.svg'} shape='square' className='card-img' style={{ width: '100%' }} />
            <div className='cardContent'>
              <h4>{data?.title?.toUpperCase()}</h4>
              {data?.latestDeployments && <span className='link-label'>Visit App: <Link to={`https://${data?.url}`}>{data?.latestDeployments[0]?.alias[0]}</Link></span>}
              {course && (
                <>
                  <p><span style={{ textDecoration: 'underline' }}>At</span>: {data?.institution}</p>
                  <p><span style={{ textDecoration: 'underline' }}>On</span>: {data?.dateIssued}</p>
                  <p><span style={{ textDecoration: 'underline' }}>Credential ID</span>: {data?.credentialID}</p>
                </>
              )}
              {project && (
                <>
                  <Link to={data?.repo} style={{textDecoration: 'none'}}><GithubOutlined style={{fontSize: '20px', margin: '0 10px 10px 0'}}/>Repository</Link>
                  <Link to={data?.demo} style={{textDecoration: 'none'}}><AppstoreOutlined style={{fontSize: '20px', marginRight: '10px'}}/>Demo</Link>
                  <Divider dashed style={dividerStyle}>
                    Tecnologies
                  </Divider>
                  <div style={skillsStyle}>
                    {data?.tech?.map((t, index) => <Button key={index} style={skillStyle} type="dashed">{t}</Button>)}
                  </div>
                </>
              )}
            </div>
          </Card>
        </motion.div>
      }
    </AnimatePresence>
  )
}

export default ProjectCard