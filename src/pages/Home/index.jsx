import React from 'react';
import { Helmet } from 'react-helmet';
import MainBar from '../../components/MainBar';
import SideBar from '../../components/SideBar';
import Hobbies from './Hobbies';
import ProfileCard from './ProfileCard';
import Projects from './Projects';
import Skills from './Skills';
import Socials from './Socials';

const Home = () => (
    <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-5">
        <Helmet>
            <title>Tonmoy Deb - Frontend Developer</title>
        </Helmet>
        <SideBar>
            <ProfileCard className="mb-5" />
            <Socials className="mb-5" />
            <Hobbies className="mb-5" />
        </SideBar>
        <MainBar>
            <Skills className="mb-5" />
            <Projects className="mb-5" />
        </MainBar>
    </div>
);

export default Home;
