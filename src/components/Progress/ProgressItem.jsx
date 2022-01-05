import React from 'react';

const ProgressItem = ({ value = 0, name = '', className = '' }) => (
    <div className={`progress_item ${className}`}>
        <span className="progress_item-name">{name}</span>
        <div className="progress_item-bar">
            <div className="progress_item-value" style={{ width: `${value}%` }} />
        </div>
    </div>
);

export default ProgressItem;
