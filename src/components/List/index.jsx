import React from 'react';
import ListItem from './ListItem';

const List = ({ className = '', data = [], children }) => (
    <ul className={`list ${className}`}>
        {data.length
            ? data.map((item) => (
                  <li key={item.id}>
                      <ListItem
                          link={item.link !== undefined ? item.link : false}
                          text={item.text}
                          icon={item.icon}
                      />
                  </li>
              ))
            : ''}
        {children}
    </ul>
);

export default List;
