import React from 'react';

const CardTags = ({ tags, className }) => (
    <div className={`card_tags ${className}`}>
        {tags.map((tag) => (
            <span className="card_tags-item" key={tag}>
                #{tag}
            </span>
        ))}
    </div>
);

export default CardTags;
