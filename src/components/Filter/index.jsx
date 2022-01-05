import React, { useState } from 'react';
import FilterBody from './FilterBody';
import FilterHeader from './FilterHeader';
import FilterNav from './FilterNav';

const Filter = ({ filters = [], className = '', title = '', data = [], Components }) => {
    const [currentFilter, setFilter] = useState('all');

    return (
        <div className={`filter ${className}`}>
            <FilterHeader title={title}>
                {filters.length ? (
                    <FilterNav
                        filters={filters}
                        currentFilter={currentFilter}
                        setFilter={setFilter}
                    />
                ) : (
                    ''
                )}
            </FilterHeader>

            {/* filter body */}
            <FilterBody data={data} currentFilter={currentFilter} Components={Components} />
        </div>
    );
};

export default Filter;
