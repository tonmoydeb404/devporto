import React from 'react';
import Button from '../Button';

const CardLinks = ({ demo, source, className }) => (
    <div className={`card_links ${className}`}>
        {demo ? (
            <Button link={demo} variant="filled" color="blue">
                Demo
            </Button>
        ) : (
            ''
        )}

        {source ? (
            <Button link={source} variant="outlined" color="dark">
                Source
            </Button>
        ) : (
            ''
        )}
    </div>
);

export default CardLinks;
