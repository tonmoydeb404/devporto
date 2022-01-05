import React from 'react';

const Layout = ({ children, className }) => (
    <div className={`container ${className}`}>{children}</div>
);

export default Layout;
