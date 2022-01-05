import React, { createContext, useContext } from 'react';
import usePersonData from '../hooks/usePersonData';

const PersonContext = createContext();

export const usePerson = () => useContext(PersonContext);

export const PersonProvider = ({ children }) => {
    const { personData, personError, personLoading } = usePersonData();

    return (
        <PersonContext.Provider value={personData}>
            {!personError && !personLoading && personData ? children : ''}
        </PersonContext.Provider>
    );
};
