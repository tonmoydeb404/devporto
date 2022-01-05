/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const FilterBody = ({ data = [], currentFilter = '', className = '', Components }) => {
    const filteredList =
        currentFilter === ('all' || '')
            ? data
            : data.filter((item) => item.category.toLowerCase() === currentFilter);

    return (
        <div className={`filter_body ${className}`}>
            {filteredList.map((item) => (
                <Components {...item} key={item['_id']} />
            ))}
        </div>
    );
};

export default FilterBody;
