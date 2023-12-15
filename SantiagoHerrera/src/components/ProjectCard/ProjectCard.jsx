import React, { useEffect, useMemo, useState } from 'react'
import { Skeleton, Card, Avatar } from 'antd';
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from "framer-motion";
import { useGlobalContext } from '../../Context/context'

const ProjectCard = ({ data, loading, delay }) => {
    const [isMounted, setIsMounted] = useState(false);
    const { state } = useGlobalContext();
    const [preview, setPreview] = useState('');

    const variants = {
        hidden: { opacity: 0, x: -50 }, // Estado inicial oculto
        visible: { opacity: 1, x: 0, transition: { delay } }, // Estado visible con transición
    };

    const cardStyles = {
        border: `3px solid ${state.theme === 'light' ? '#1e2125' : '#e9dfce'}`,
        background: state.theme === 'light' ? '#1e2125' : '#e9dfce',
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
                        className='card'
                    >
                        <Skeleton loading={loading} avatar active className='card-content'>
                            <Avatar src={state.theme === 'light' ? '/assets/coding-light.svg' : '/assets/coding-dark.svg'} shape='square' className='card-img' style={{width: '100%'}}/>
                            <div className='cardContent'>
                                <h4>{data?.name.toUpperCase()}</h4>
                                <span className='link-label'>Visit App: <Link to={`https://${data?.latestDeployments[0]?.alias[0]}`}>{data?.latestDeployments[0]?.alias[0]}</Link></span>
                            </div>
                        </Skeleton>
                    </Card>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default ProjectCard