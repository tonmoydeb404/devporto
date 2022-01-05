/* eslint-disable dot-notation */
import React from 'react';
import Box from '../../components/Box';
import Card from '../../components/Card';
import { usePerson } from '../../context/PersonContext';

const Hobbies = ({ className = '' }) => {
    const { hobbies } = usePerson();

    return hobbies ? (
        <Box title="Hobbies" className={`hobbies ${className}`}>
            {hobbies
                ? hobbies.map((hobby) => (
                      <Card
                          className="p-0 flex-col shadow-none gap-y-1.5 hobby"
                          image={hobby.image}
                          key={hobby['_key']}
                      >
                          <h2 className="hobbies_title">{hobby.name}</h2>
                      </Card>
                  ))
                : ''}
        </Box>
    ) : (
        ''
    );
};

export default Hobbies;
