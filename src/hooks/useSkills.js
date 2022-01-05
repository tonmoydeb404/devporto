import { useEffect, useState } from 'react';
import client from '../sanity/client';

const useSkills = () => {
    const [skills, setSkills] = useState([]);
    const [skillsError, setSkillsError] = useState(false);
    const [skillsLoading, setSkillsLoading] = useState(true);

    useEffect(() => {
        const query = `*[_type == "skills"]`;
        // set error to false
        setSkillsError(false);
        // make loading untill perform the fetch
        setSkillsLoading(true);
        client
            .fetch(query)
            .then((skill) => {
                // convert array to object
                let customSkills = {};

                skill.forEach((item) => {
                    customSkills = { ...customSkills, [item.name.toLowerCase()]: { ...item } };
                });

                // set value
                setSkills({ ...customSkills });

                // remove loading
                setSkillsLoading(false);
            })
            .catch((err) => {
                // add error
                setSkillsError(err);
                // remove loading
                setSkillsLoading(false);
            });
        return () => {
            // make everything to default
            setSkills({});
            setSkillsLoading(true);
            setSkillsError(false);
        };
    }, []);

    return {
        skills,
        skillsError,
        skillsLoading,
    };
};

export default useSkills;
