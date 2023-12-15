import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Space } from 'antd';
import axios from 'axios'
import ProjectCard from '../components/ProjectCard/ProjectCard';

const Projects = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setIsMounted(true);
    axios.get("https://api.vercel.com/v9/projects", { 'headers': { 'Authorization': 'Bearer ' + "y3qDRotGBmFzos0MqjXfCevS" } })
      .then(res => {
        setLoading(false);
        setProjects(res?.data?.projects)
      })
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
          <h1>My Projects</h1>
          <div className='projectsContainer'>
            {!loading &&
              projects.map((p, index) => <ProjectCard key={index} data={p} loading={loading} delay={index * 0.1}/>
            )}
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default Projects