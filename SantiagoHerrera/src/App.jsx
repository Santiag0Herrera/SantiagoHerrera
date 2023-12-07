import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { appRoutes } from './routes';
import { Layout, ConfigProvider, theme } from 'antd';
import './App.css';
import SideBar from './components/SideBar';
import { useGlobalContext } from './Context/context';
import { motion, useScroll, useSpring } from "framer-motion"

const { Content } = Layout;

function App() {
  const { state } = useGlobalContext();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: state.theme === 'light' ? '#e9dfce' : '#1e2125',
        },
        components: {
          Menu: {
            colorPrimary: state.theme === 'light' ? '#e9dfce' : '#1e2125',
            algorithm: true,
          },
          FloatButton: {
            colorPrimary: state.theme === 'light' ? '#1e2125' : '#e9dfce',
            algorithm: true,
          },
        }
      }}
    >
      <Layout style={{ minHeight: '100vh', width: '100vw' }}>
        <SideBar />
        <Content
          style={{
            minHeight: '150vh',
            padding: '1rem',
            width: '85vw',
            position: 'absolute',
            right: 0,
            backgroundColor: state.theme === 'light' ? '#e9dfce' : '#1e2125',
            color: state.theme === 'light' ? '#1e2125' : '#e9dfce'
          }}>
          <motion.div
          className='progressBar'
            style={{
              scaleX: scaleX,
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              transformOrigin: '0%',
              width: '100%',
              height: '0.5rem',
              backgroundColor: state.theme === 'light' ? '#1e2125' : '#e9dfce',
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'row',
            }}
          />
          <Routes>
            {appRoutes.map((r, index) => (
              <Route key={r.id} path={r.path} element={r.component} />
            ))}
          </Routes>
        </Content>
      </Layout>
    </ConfigProvider>
  )
}

export default App;
