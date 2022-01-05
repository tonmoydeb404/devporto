import React from 'react';
import BoxHeader from './BoxHeader';

const Box = ({ children, className, title = '', cta = {} }) => (
    <div className={`box ${className}`}>
        {title ? <BoxHeader title={title} cta={cta} /> : ''}

        {children ? <div className="box_body">{children}</div> : ''}
    </div>
);

export default Box;
