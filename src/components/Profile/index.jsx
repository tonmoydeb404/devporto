import React from 'react';
import ProfileBody from './ProfileBody';
import ProfileHeader from './ProfileHeader';
import ProfileImage from './ProfileImage';

const Profile = ({ className, title, subtitle, image, text, children }) => (
    <div className={`profile box ${className}`}>
        {image ? <ProfileImage image={image} title={title} /> : ''}

        {title ? <ProfileHeader title={title} subtitle={subtitle} /> : ''}

        {text ? <ProfileBody text={text} /> : ''}

        {children}
    </div>
);

export default Profile;
