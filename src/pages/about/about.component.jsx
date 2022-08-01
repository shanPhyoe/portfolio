import React from 'react';
import { motion } from 'framer-motion';

import { ReactComponent as Heart } from '../../assets/icons/heart.svg';

import SkillList from '../../components/SkillList/skill-list.component';

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
                <div className="about__about">
                    <h3>About Me</h3>
                    <p>
                        I am a flexible team worker passionate about everything
                        related to web development. As a user-friendly
                        developer, I carefully consider user experience and
                        build responsive websites.
                    </p>
                    <p>
                        Persistent in the problem-solving, quick learner, and a
                        well-organized person with careful attention to detail
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
                <div className="about__skills">
                    <h3>Skills</h3>
                    <div className="about__skills-content">
                        <SkillList name="HTML" />
                        <SkillList name="CSS" />
                        <SkillList name="Sass" />
                        <SkillList name="JavaScript" />
                        <SkillList name="React" />
                        <SkillList name="Redux" />
                        <SkillList name="Next" />
                        <SkillList name="Node" />
                        <SkillList name="Express" />
                        <SkillList name="MongoDB" />
                        <SkillList name="Firebase" />
                        <SkillList name="Figma" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
