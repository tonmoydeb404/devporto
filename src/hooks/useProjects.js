import { useEffect, useState } from 'react';
import client from '../sanity/client';

const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [projectsError, setProjectsError] = useState(false);
    const [projectsLoading, setProjectsLoading] = useState(true);

    useEffect(() => {
        const query = `*[_type == "projects"]`;
        // set error to false
        setProjectsError(false);
        // make loading untill perform the fetch
        setProjectsLoading(true);
        client
            .fetch(query)
            .then((project) => {
                // modify data structure
                const customData = [...project].map((item) => {
                    const customObj = { ...item };

                    // change image path
                    if (typeof customObj.imageUrl === 'string') {
                        customObj.image = customObj.imageUrl;
                    }

                    return customObj;
                });

                // set value
                setProjects([...customData]);

                // remove loading
                setProjectsLoading(false);
            })
            .catch((err) => {
                // add error
                setProjectsError(err);
                // remove loading
                setProjectsLoading(false);
            });
        return () => {
            // make everything to default
            setProjects([]);
            setProjectsLoading(true);
            setProjectsError(false);
        };
    }, []);

    return {
        projects,
        projectsError,
        projectsLoading,
    };
};

export default useProjects;
