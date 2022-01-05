import React from 'react';

const InputHeader = ({ className = '', title = '', text = '' }) => (
    <div className={`input_header ${className}`}>
        {title ? <h2 className="input_header-title">{title}</h2> : ''}
        {text ? <span className="input_header-text">{text}</span> : ''}
    </div>
);

export default InputHeader;
