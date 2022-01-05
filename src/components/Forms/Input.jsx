/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import InputHeader from './InputHeader';

const Input = ({
    className = '',
    title = '',
    text = '',
    placeHolder = '',
    type = '',
    value = '',
    help = '',
    fieldName = '',
    error = false,
    onChange = () => {},
    ...rest
}) => (
    <div className={`input ${className}`}>
        {title || text ? <InputHeader title={title} text={text} /> : ''}

        <input
            type={type}
            placeholder={placeHolder}
            className="input_field"
            name={fieldName}
            value={value}
            onChange={onChange}
            {...rest}
        />

        {help ? (
            <p className="input_help" style={{ color: error ? '#f00' : 'initial' }}>
                {help}
            </p>
        ) : (
            ''
        )}
    </div>
);

export default Input;
