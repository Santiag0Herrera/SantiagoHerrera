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
  const [collapse, setCollapse] = useState(false);
  const { state } = useGlobalContext();

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { delay } },
  };

  const cardStyles = {
    border: `3px solid ${state.theme === 'light' ? '#1e2125' : '#e9dfce'}`,
    background: state.theme === 'light' ? '#1e2125' : '#e9dfce',
    color: state.theme === 'light' ? '#e9dfce' : '#1e2125',
    border: `4px solid grey`,
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
    cursor: 'arrow'
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

  useEffect(()=>{
    window.screen.width > 1000 ? setCollapse(false) : setCollapse(true)
}, [window.screen.width])

  return (
    <AnimatePresence>
      {isMounted &&
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          style={{width: !collapse ? '30%' : '100%',}}
        >
          <Card
            style={cardStyles}
            className='card'
          >
            <Avatar src={`data:image/png;base64,${data?.img}`} alt={data?.title} shape='square' className='card-img' style={{ width: '100%' }} />
            <div className='cardContent'>
              <h4>{data?.title?.toUpperCase()} <span style={{color: 'grey', fontSize: '0.60rem'}}> - {data?.type}</span></h4>
              {course && (
                <>
                  <p><span style={{ textDecoration: 'underline' }}>At</span>: {data?.institution}</p>
                  <p><span style={{ textDecoration: 'underline' }}>On</span>: {data?.dateIssued}</p>
                  <p><span style={{ textDecoration: 'underline' }}>Credential ID</span>: {data?.credentialID}</p>
                </>
              )}
              {project && (
                <>
                  <Link to={data?.repo} target="_blank" style={{textDecoration: 'none'}}><GithubOutlined style={{fontSize: '20px', margin: '0 10px 10px 0'}}/>Repository</Link>
                  <Link to={data?.demo} target="_blank" style={{textDecoration: 'none'}}><AppstoreOutlined style={{fontSize: '20px', marginRight: '10px'}}/>Demo</Link>
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