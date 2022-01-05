import React from 'react';

const MainBar = ({ className, children }) => (
    <main className={`mainbar ${className}`}>{children}</main>
);

export default MainBar;
