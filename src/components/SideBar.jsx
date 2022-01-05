import React from 'react';

const SideBar = ({ className, children }) => (
    <aside className={`sidebar ${className}`}>{children}</aside>
);

export default SideBar;
