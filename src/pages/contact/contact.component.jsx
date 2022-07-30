import React from 'react';
import { motion } from 'framer-motion';

import { ReactComponent as Email } from '../../assets/icons/email.svg';
import { ReactComponent as Phone } from '../../assets/icons/phone.svg';
import { ReactComponent as GitHub } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';

import './contact.styles.scss';

const variants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
};

const Contact = () => {
    return (
        <motion.div
            className="contact-wrapper"
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
        >
            <div className="contact">
                <h3>Contact</h3>
                <p>
                    I&#39;m interested in job opportunities and I would like to
                    hear from you. Also, if you have any questions or just want
                    to say hi, please ring my bells, and I will get back to you
                    as soon as possible.
                </p>
                <a
                    className="contact__item"
                    href="mailto:shan.phyoe97@gmail.com"
                >
                    <Email className="contact__icon" />
                    <span>shan.phyoe97@gmail.com</span>
                </a>
                <a
                    className="contact__item"
                    href="https://github.com/shanPhyoe"
                    target="_blank"
                    rel="noopenner noreferrer"
                >
                    <GitHub className="contact__icon" />
                    <span>shanPhyoe</span>
                </a>
                <a
                    className="contact__item"
                    href="https://www.linkedin.com/in/shan-phyoe/"
                    target="_blank"
                    rel="noopenner noreferrer"
                >
                    <LinkedIn className="contact__icon" />
                    <span>Shan Phyoe</span>
                </a>
                <a className="contact__item" href="tel:+959445185009">
                    <Phone className="contact__icon" />
                    <span>+959 445 185 009</span>
                </a>
            </div>
        </motion.div>
    );
};

export default Contact;
