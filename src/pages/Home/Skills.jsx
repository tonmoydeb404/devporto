/* eslint-disable dot-notation */
import React from 'react';
import Box from '../../components/Box';
import Progress from '../../components/Progress';
import useSkills from '../../hooks/useSkills';

const Skills = ({ className = '' }) => {
    const { skills, skillsError, skillsLoading } = useSkills();

    if (skillsLoading && !skillsError && !skills) {
        return 'loading';
    }

    if (!skillsLoading && !skills && skillsError) {
        return 'error';
    }

    return skills ? (
        <div className={`flex flex-col items-start gap-y-5 xl:flex-row xl:gap-x-5 ${className}`}>
            {Object.keys(skills).map((skill) => (
                <Box
                    title={skills[skill].name}
                    key={skills[skill]['_id']}
                    className="w-full xl:w-2/4 "
                >
                    <Progress data={skills[skill].list} className="w-full" />
                </Box>
            ))}
        </div>
    ) : (
        ''
    );
};

export default Skills;
