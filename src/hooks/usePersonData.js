import { useEffect, useState } from 'react';
import client from '../sanity/client';

const usePersonData = () => {
    const [personData, setPerson] = useState({});
    const [personError, setPersonError] = useState(false);
    const [personLoading, setPersonLoading] = useState(true);

    useEffect(() => {
        const id = import.meta.env.VITE_PERSON_ID;
        // set error to false
        setPersonError(false);
        // make loading untill perform the fetch
        setPersonLoading(true);
        client
            .getDocument(id)
            .then((person) => {
                // clone data
                const customPerson = { ...person };

                // change image path
                if (typeof customPerson.imageUrl === 'string') {
                    customPerson.image = customPerson.imageUrl;
                }

                // set person value
                setPerson({ ...customPerson });

                // remove loading
                setPersonLoading(false);
            })
            .catch((err) => {
                // add error
                setPersonError(err);
                // remove loading
                setPersonLoading(false);
            });
        return () => {
            // make everything to default
            setPerson({});
            setPersonLoading(true);
            setPersonError(false);
        };
    }, []);

    return {
        personData,
        personError,
        personLoading,
    };
};

export default usePersonData;
