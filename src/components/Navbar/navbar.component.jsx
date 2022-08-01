import React from 'react';
import { Link } from 'react-router-dom';

import LinkItem from '../LinkItem/link-item.component';

import './navbar.styles.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <div className="navbar__home">shanPhyoe</div>
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
