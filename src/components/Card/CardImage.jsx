import React from 'react';

const CardImage = ({ image, title, className = '' }) => (
    <div className={`card_image ${className}`}>
        <img src={image} alt={title} />
    </div>
);

export default CardImage;
