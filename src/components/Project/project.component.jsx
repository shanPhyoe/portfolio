import React from 'react';

import './project.styles.scss';

const Project = ({
    title,
    imagePath,
    description,
    stack,
    websiteLink,
    gitRepoLink,
    revOrder,
}) => {
    return (
        <div className={`project ${revOrder ? 'project--rev' : ''}`}>
            <a href={websiteLink} className="project__image">
                <img src={imagePath} alt={title} />
            </a>
            <div className="project__content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project__stack">
                    <div>STACK</div>
                    <p>{stack}</p>
                </div>
                <a
                    href={gitRepoLink}
                    target="_blank"
                    role="button"
                    rel="noreferrer noopenner"
                    className="project__link"
                >
                    GIT Repo
                </a>
                <a
                    href={websiteLink}
                    target="_blank"
                    role="button"
                    rel="noreferrer noopenner"
                    className="project__link"
                >
                    Live Website
                </a>
            </div>
        </div>
    );
};

export default Project;
