/* eslint-disable react/jsx-props-no-spreading */
import { Icon } from '@iconify/react';
import React from 'react';

const Button = ({
    link = false,
    startIcon = false,
    endIcon = false,
    children,
    className = '',
    size = 'md',
    color = 'dark',
    variant = 'filled',
    ...rest
}) => {
    if (link) {
        return (
            <a
                href={link}
                className={`btn btn-${size} btn-${color} ${variant} ${className}`}
                {...rest}
            >
                {startIcon ? <Icon className="btn_icon" icon={`mdi:${startIcon}`} /> : ''}
                <span className="btn_text">{children}</span>
                {endIcon ? <Icon className="btn_icon" icon={`mdi:${endIcon}`} /> : ''}
            </a>
        );
    }

    return (
        <button
            type="button"
            className={`btn btn-${size} btn-${color} ${variant} ${className}`}
            {...rest}
        >
            {startIcon ? <Icon className="btn_icon" icon={`mdi:${startIcon}`} /> : ''}
            <span className="btn_text">{children}</span>
            {endIcon ? <Icon className="btn_icon" icon={`mdi:${endIcon}`} /> : ''}
        </button>
    );
};

export default Button;
