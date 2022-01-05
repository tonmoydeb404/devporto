/* eslint-disable dot-notation */
/* eslint-disable no-unused-vars */
import React from 'react';
import List from '../../components/List';
import ListItem from '../../components/List/ListItem';
import Profile from '../../components/Profile';
import { usePerson } from '../../context/PersonContext';

const ProfileCard = ({ className = '' }) => {
    const Person = usePerson();

    return (
        <Profile
            title={Person.name}
            subtitle={Person.job}
            image={Person.imageUrl}
            text={Person.bio}
            className={className}
        >
            {Person.contacts ? (
                <List className="profile_contacts">
                    {Person.contacts.phone !== undefined ? (
                        <ListItem
                            link={`tel:${Person.contacts.phone}`}
                            icon="phone"
                            text={Person.contacts.phone}
                        />
                    ) : (
                        ''
                    )}
                    {Person.contacts.email !== undefined ? (
                        <ListItem
                            link={`mailto:${Person.contacts.email}`}
                            icon="at"
                            text={Person.contacts.email}
                        />
                    ) : (
                        ''
                    )}
                </List>
            ) : (
                ''
            )}
        </Profile>
    );
};

export default ProfileCard;
