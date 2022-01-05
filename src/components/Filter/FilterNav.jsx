import React from 'react';
import Button from '../Button';

const FilterNav = ({
    filters = [],
    className = '',
    currentFilter = 'all',
    setFilter = () => {},
}) => (
    <div className={`filter_nav ${className}`}>
        <Button
            className="filter_nav-item"
            size="sm"
            variant={currentFilter === 'all' ? 'filled' : 'outlined'}
            color={currentFilter === 'all' ? 'blue' : 'dark'}
            onClick={() => setFilter('all')}
        >
            all
        </Button>
        {filters.map((filter) => (
            <Button
                className="filter_nav-item"
                size="sm"
                variant={currentFilter === filter ? 'filled' : 'outlined'}
                color={currentFilter === filter ? 'blue' : 'dark'}
                onClick={() => setFilter(filter.toLowerCase())}
                key={filter}
            >
                {filter}
            </Button>
        ))}
    </div>
);

export default FilterNav;
