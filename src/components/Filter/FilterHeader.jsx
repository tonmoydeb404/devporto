import React from 'react';

const FilterHeader = ({ title = '', className = '', children }) => (
    <div className={`filter_header box ${className}`}>
        <h2 className="filter_header-title box_header-title">{title}</h2>
        {children}
    </div>
);

export default FilterHeader;
