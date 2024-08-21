import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { projects } from '../data/data';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import Loader from '../components/Loader/Loader';

const Projects = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
      
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
          style={{width: '100%', height: '100%'}}
        >
          <h1>My Projects</h1>
          <div className='projectsContainer'>
              {projects.map((p, index) => <ProjectCard key={index} data={p} delay={index * 0.1} project={true}/>)}
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default Projects