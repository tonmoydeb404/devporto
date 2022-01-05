import React from 'react';
import Box from '../../components/Box';
import List from '../../components/List';
import { usePerson } from '../../context/PersonContext';

const Socials = ({ className = '' }) => {
    const { socials } = usePerson();

    const socialList = socials
        ? Object.keys(socials).map((social) => {
              const splitedSocial = socials[social].split('/');
              return {
                  id: social,
                  link: socials[social],
                  icon: social,
                  text: splitedSocial[splitedSocial.length - 1],
              };
          })
        : [];

    return (
        <Box className={`socials ${className}`} title="Socials">
            {socials ? <List data={socialList} /> : ''}
        </Box>
    );
};

export default Socials;
