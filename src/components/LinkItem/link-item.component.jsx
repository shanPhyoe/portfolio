import React from 'react';
import { NavLink } from 'react-router-dom';

import './link-item.styles.scss';

const LinkItem = ({ href, name }) => {
    return (
        <NavLink to={href} className="link-item">
            {name}
        </NavLink>
    );
};

export default LinkItem;
