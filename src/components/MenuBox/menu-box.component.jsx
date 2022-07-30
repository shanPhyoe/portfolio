import React, { useState, useRef } from 'react';
import { useClickAway } from 'react-use';

import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';

import LinkItem from '../LinkItem/link-item.component';

import './menu-box.styles.scss';

const MenuBox = () => {
    const [linksShown, setLinksShown] = useState(false);
    const ref = useRef(null);

    useClickAway(ref, () => setLinksShown(false));

    return (
        <div className="menubox" ref={ref}>
            <div
                className="menubox__button"
                onClick={() => setLinksShown(linksShown ? false : true)}
            >
                <MenuIcon className="menubox__icon" />
            </div>
            <div
                className={`menubox__links ${
                    linksShown ? 'menubox__links--active' : ''
                }`}
            >
                <div onClick={() => setLinksShown(false)}>
                    <LinkItem href="/about" name="About" />
                </div>
                <div onClick={() => setLinksShown(false)}>
                    <LinkItem href="/work" name="Work" />
                </div>
                <div onClick={() => setLinksShown(false)}>
                    <LinkItem href="/contact" name="Contact" />
                </div>
            </div>
        </div>
    );
};

export default MenuBox;
