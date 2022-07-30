import React from 'react';
import { motion } from 'framer-motion';

import { ReactComponent as Heart } from '../../assets/icons/heart.svg';

import Programmer from '../../components/Programmer/programmer.component';

import './about.styles.scss';

const variants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
};

const About = () => {
    return (
        <motion.div
            className="about-wrapper"
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
        >
            <div className="about">
                <div className="about__content">
                    <div className="about__about">
                        <h3>About</h3>
                        <p>
                            I am a passionate full stack developer located in
                            Myanmar. I have a serious passion for creating
                            animations, web responsiveness and UI effects.
                        </p>
                        <p>
                            Persistent problem solver, quick learner and
                            well-organised person with high attention to details
                            and web responsiveness.
                        </p>
                    </div>
                    <div className="about__love">
                        <h3 className="about__love-header">
                            <span>I</span>
                            <Heart className="about__icon" />
                        </h3>
                        <p>
                            Interactive Webs, Dogs, Coffee, Art, Music, Anime,
                            Playing Guitar, Video Games.
                        </p>
                    </div>
                </div>
                <div className="about__programmer">
                    <Programmer />
                </div>
            </div>
        </motion.div>
    );
};

export default About;
