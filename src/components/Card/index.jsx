import React from 'react';
import CardContent from './CardContent';
import CardImage from './CardImage';
import CardLinks from './CardLinks';
import CardTags from './CardTags';

const Card = ({
    className = '',
    title = '',
    image = false,
    text = '',
    demo = '',
    source = '',
    tags = [],
    children,
}) => (
    <div className={`card box ${className}`}>
        {/* card image */}
        {image ? <CardImage image={image} title={title} /> : ''}
        {/* card body */}
        <div className="card_body">
            {title || children ? (
                <CardContent title={title} text={text}>
                    {children}
                    {tags.length && !children ? <CardTags tags={tags} /> : ''}
                    {/* card links */}
                </CardContent>
            ) : (
                ''
            )}
            {demo || source ? <CardLinks source={source} demo={demo} /> : ''}
        </div>
    </div>
);

export default Card;
