import React from 'react';

const BoxHeader = ({ className = '', title = '', cta = {} }) => (
    <div className={`box_header ${className}`}>
        <h2 className="box_header-title">{title}</h2>

        {cta ? (
            <a href={cta.link} className="box_header-link">
                {cta.text}
            </a>
        ) : (
            ''
        )}
    </div>
);

export default BoxHeader;
