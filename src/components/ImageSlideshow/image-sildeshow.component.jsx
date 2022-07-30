import React from 'react';

import './image-slideshow.styles.scss';

const ImageSlideshow = () => {
    return (
        <div className="slideshow">
            <div className="slideshow__image">
                <img src="/images/hotel alucia.png" alt="hotel alucia" />
            </div>
            <div className="slideshow__image">
                <img
                    src="/images/ryus greeneries.png"
                    alt={`ryu's greeneries`}
                />
            </div>
            <div className="slideshow__image">
                <img src="/images/fx-tetra.png" alt="fx-tetra" />
            </div>
            <div className="slideshow__image">
                <img src="/images/goldflow.png" alt="gold flow" />
            </div>
            <div className="slideshow__image">
                <img src="/images/hotel alucia.png" alt="hote alucia" />
            </div>
            <div className="slideshow__image">
                <img
                    src="/images/ryus greeneries.png"
                    alt={`ryu's greeneries`}
                />
            </div>
            <div className="slideshow__image">
                <img src="/images/fx-tetra.png" alt="fx-tetra" />
            </div>
            <div className="slideshow__image">
                <img src="/images/goldflow.png" alt="gold flow" />
            </div>
        </div>
    );
};

export default ImageSlideshow;
