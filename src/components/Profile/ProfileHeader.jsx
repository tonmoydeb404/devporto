import React from 'react';

const ProfileHeader = ({ className = '', title = '', subtitle = '' }) => (
    <div className={`profile_header ${className}`}>
        <h1 className="profile_header-title">{title}</h1>
        <h2 className="profile_header-subtitle">{subtitle}</h2>
    </div>
);

export default ProfileHeader;
