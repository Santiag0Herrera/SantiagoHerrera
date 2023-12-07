import React, { useEffect, useState } from 'react'
import { Skeleton, Card, Avatar } from 'antd';
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import {useGlobalContext} from '../../Context/context'


const ProjectCard = ({ data, loading }) => {
    const [isMounted, setIsMounted] = useState(false);
    const {state} = useGlobalContext();
    
    const cardStyles = {
        border: `3px solid ${state.theme === 'light' ? '#1e2125' : '#e9dfce'}`,
        background: state.theme === 'light' ? '#1e2125' : '#e9dfce', 
        color: state.theme === 'light' ? '#e9dfce' : '#1e2125',
        width: '100%',
        margin: '0 auto',
    }

    useEffect(() => {
        setIsMounted(true);

        return () => {
            setIsMounted(false);
        }
    }, [])

    return (
        <>
            {isMounted &&
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    style={{width: '70%'}}
                >
                    <Card
                        style={cardStyles}
                    >
                        <Skeleton loading={loading} avatar active >
                            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" shape='square' size={100} />
                            <div className='cardContent'>
                                <h4>{data?.name}</h4>
                                <Link to={`https://${data?.latestDeployments[0]?.alias[0]}`}>{data?.latestDeployments[0]?.alias[0]}</Link>
                            </div>
                        </Skeleton>
                    </Card>
                </motion.div>
            }
        </>
    )
}

export default ProjectCard