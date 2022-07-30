import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Dog } from '../../assets/icons/dog.svg';

import LinkItem from '../LinkItem/link-item.component';

import './navbar.styles.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <div className="navbar__home">
                    <Dog className="navbar__icon" />
                    <span>shanPhyoe</span>
                </div>
            </Link>
            <div className="navbar__links">
                <LinkItem href="about" name="About" />
                <LinkItem href="work" name="Work" />
                <LinkItem href="contact" name="Contact" />
            </div>
        </nav>
    );
};

export default Navbar;
