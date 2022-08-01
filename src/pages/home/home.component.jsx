import React from 'react';
import { motion } from 'framer-motion';

import Programmer from '../../components/Programmer/programmer.component';

import './home.styles.scss';

const variants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
};

export default function Home() {
    return (
        <motion.div
            className="home"
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
        >
            <div className="home__header-textbox">
                <span>Hello, my name is</span>
                <h1>Ye Wai Shan Phyoe.</h1>
                <h2>I am a Web Developer</h2>
            </div>
            <div className="home__programmer">
                <Programmer />
            </div>
        </motion.div>
    );
}
