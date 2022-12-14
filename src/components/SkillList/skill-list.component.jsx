import React from 'react';
import { useState } from 'react';

import { ReactComponent as Bolt } from '../../assets/icons/bolt.svg';

import './skill-list.styles.scss';

const SkillList = ({ name }) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);

        setTimeout(() => {
            setIsHovering(false);
        }, 1000);
    };

    return (
        <div className="skill-list" onMouseEnter={handleMouseEnter}>
            <div
                className={`skill-list__image ${
                    isHovering ? 'skill-list__image--active' : ''
                }`}
            >
                <Bolt className="skill-list__icon" />
            </div>
            <span>{name}</span>
        </div>
    );
};

export default SkillList;
