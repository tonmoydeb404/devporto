import { Icon } from '@iconify/react';
import React from 'react';

const ListItem = ({ link, icon, text }) => {
    if (link) {
        return (
            <a className="list_item" href={link} target="_blank" rel="noreferrer">
                {icon ? <Icon icon={`mdi:${icon}`} className="icon" /> : ''}
                <span className="text">{text}</span>
            </a>
        );
    }

    return (
        <span className="list_item">
            {icon ? <Icon icon={`mdi:${icon}`} className="icon" /> : ''}
            <span className="text">{text}</span>
        </span>
    );
};

export default ListItem;
