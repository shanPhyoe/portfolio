import React from 'react';
import { useEffect, useState } from 'react';

import { ReactComponent as Sun } from '../../assets/icons/sun.svg';
import { ReactComponent as Moon } from '../../assets/icons/moon.svg';

import './toggle-theme.styles.scss';

const ToggleTheme = () => {
    const [activeTheme, setActiveTheme] = useState('dark');
    const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
    }, [activeTheme]);

    return (
        <div
            className={`toggle-theme ${
                activeTheme === 'light'
                    ? 'toggle-theme--light'
                    : 'toggle-theme--dark'
            }`}
            onClick={() => setActiveTheme(inactiveTheme)}
        >
            {activeTheme === 'dark' ? (
                <Sun className="toggle-theme__icon" />
            ) : (
                <Moon className="toggle-theme__icon" />
            )}
        </div>
    );
};

export default ToggleTheme;
