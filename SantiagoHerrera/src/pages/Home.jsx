import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { personalInfo } from '../data/data';
import { useGlobalContext } from '../Context/context';
import { Divider } from 'antd';
import TechCard from '../components/TechCard/TechCard';
import EduCard from '../components/EduCard/EduCard';
import ProjectCard from '../components/ProjectCard/ProjectCard';

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { name, title, technologies, education, courses } = personalInfo;
  const { state } = useGlobalContext();

  const dividerStyle = {
    borderColor: 'grey',
    margin: 0
  }

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
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div style={{ marginBottom: '5vh' }}>
            <h1 style={{ marginBottom: '0px' }}>Welcome to my portfolio!</h1>
            <h3 style={{ margin: '10px 0', color: 'grey' }}>{name} - {title}</h3>
          </div>
          <section>
            <h2>About Me</h2>
            <Divider dashed style={dividerStyle} />
            <p>I am an optimistic and joyful individual striving for <b>continuous growth</b> and development in both my professional and educational pursuits, as well as in my personal interests. My philosophy is to <b>"embrace mistakes as opportunities"</b> for learning and growth, rather than fearing them. In my free time, I enjoy spending time with friends and family, and I have a <b>passion for technology.</b></p>
            <p>Currently, I work at Red Link S.A as a <b>Frontend React Developer</b>, actively contributing to the development of applications for both internal and external clients. As a team, we adhere to high standards in cybersecurity and quality, ensuring the delivery of secure and top-notch <b>software solutions.</b></p>
            <p>I received my high school diploma and Bachelor's Degree in Business Management and Administration from Colegio San Gabriel de la Dolorosa, where I also obtained an <b>advanced level of English (First Certificate Expert).</b></p>
            <p>Currently pursuing a <b>Computer Engineergin Degree</b>. In addition, I have basic accounting knowledge, <b>strong teamwork skills</b>, proficiency in audiovisual programs and experience as a <b>UX & UI Designer.</b></p>
          </section>
          <section>
            <h2>Technologies</h2>
            <Divider dashed style={dividerStyle} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div>
                <h3>Front End</h3>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', flexWrap: 'wrap' }}>
                  {technologies.frontend.map((ft, index) => <TechCard key={index} data={ft} delay={index * 0.1} />)}
                </div>
              </div>
              <div>
                <h3>Back End</h3>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', flexWrap: 'wrap' }}>
                  {technologies.backend.map((bt, index) => <TechCard key={index} data={bt} delay={index * 0.1} />)}
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2>Education</h2>
            <Divider dashed style={dividerStyle} />
            {education.map((edu, index) => <EduCard key={index} data={edu} delay={index * 0.1} />)}
          </section>
          <section>
            <h2>Courses</h2>
            <Divider dashed style={{ borderColor: 'grey', margin: '0 0 20px 0'}} />
            <div className='projectsContainer'>
              {courses.map((c, index) => <ProjectCard key={index} course={true} data={c} delay={index * 0.1} />)}
            </div>
          </section>
        </motion.div>
      )}
    </div>
  )
}

export default Home