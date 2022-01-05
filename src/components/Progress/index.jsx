import React from 'react';
import ProgressItem from './ProgressItem';

const Progress = ({ className = '', data = [] }) => (
    <div className={`progress ${className}`}>
        {data.length
            ? data.map((item) => (
                  <ProgressItem value={item.value} name={item.name} key={item['_key']} />
              ))
            : ''}
    </div>
);

export default Progress;
