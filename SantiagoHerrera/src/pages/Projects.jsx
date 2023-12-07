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
    <Space className='page'>
      {isMounted && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <h1>My Projects</h1>
          <Space className='projectsContainer'>
            {loading ? 
              Array.from({ length: 6 }).map((item, index) => <ProjectCard key={index} loading={loading}/>)
            :
              projects.map((p, index) => <ProjectCard key={index} data={p} loading={loading}/>
            )}
          </Space>
        </motion.div>
      )}
    </Space>
  )
}

export default Projects