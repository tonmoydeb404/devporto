import React from 'react';
import Card from '../../components/Card';
import Filter from '../../components/Filter';
import useProjects from '../../hooks/useProjects';
import { getDataList } from '../../utills';

const Projects = ({ className = '' }) => {
    const { projects, projectsError, projectsLoading } = useProjects();

    if (projectsLoading && !projectsError && !projects) {
        return 'loading';
    }

    if (!projectsLoading && !projects && projectsError) {
        return 'error';
    }

    return projects ? (
        <Filter
            className={`projects ${className}`}
            title="Projects"
            data={projects}
            filters={getDataList(projects, 'category')}
            Components={Card}
        />
    ) : (
        ''
    );
};

export default Projects;
