import React from 'react';
import Theme from '../Theme';

const ProfileImage = ({ image, title }) => (
    <div className="profile_image relative">
        <img src={image} alt={title} />
        <Theme className="absolute bottom-3  right-3 z-50" />
    </div>
);

export default ProfileImage;
