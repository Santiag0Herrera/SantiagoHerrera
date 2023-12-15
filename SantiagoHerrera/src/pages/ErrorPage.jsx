import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useGlobalContext } from '../Context/context';

const ErrorPage = () => {
    const [isMounted, setIsMounted] = useState(false);
    const { state } = useGlobalContext();

    const variants = {
        hidden: { opacity: 0, x: -50 }, // Estado inicial oculto
        visible: { opacity: 1, x: 0, transition: '1s' }, // Estado visible con transición
    };

    useEffect(() => {
        setIsMounted(true);
        return () => {
            setIsMounted(false);
        }
    }, []);

    return (
        <div className='page error-page'>
            {isMounted && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    style={{width: '100%', display: 'flex', justifyContent: 'center'}}
                >
                    <img src={state.theme === 'light' ? '/assets/404-dark.svg' : '/assets/404-light.svg'} style={{width:'40vw'}}/>
                </motion.div>
            )}
        </div>
    )
}

export default ErrorPage