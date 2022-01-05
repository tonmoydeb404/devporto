import React from 'react';

const CardContent = ({ title, text, className, children }) => (
    <div className={`card_content ${className}`}>
        {children}
        {title ? <h2 className="card_content-title">{title}</h2> : ''}
        {text ? <p className="card_content-text">{text}</p> : ''}
    </div>
);

export default CardContent;
