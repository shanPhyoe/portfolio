import React from 'react';
import { motion } from 'framer-motion';

import ImageSlideshow from '../../components/ImageSlideshow/image-sildeshow.component';
import SkillList from '../../components/SkillList/skill-list.component';

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
            <div className="home__slideshow">
                <ImageSlideshow />
            </div>
            <div className="home__header-textbox">
                <span>Hello, my name is</span>
                <h1>Ye Wai Shan Phyoe,</h1>
                <h2>a Web Developer.</h2>
            </div>
            <div className="home__skills">
                <h3>Skills</h3>
                <div className="home__skills-content">
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
        </motion.div>
    );
}
