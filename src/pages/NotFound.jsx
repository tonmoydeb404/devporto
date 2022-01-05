import { Icon } from '@iconify/react';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="flex flex-col w-full h-full absolute top-0 left-0 items-center justify-center ">
        <Helmet>
            <title>404 - Page Not Found - Tonmoy Deb</title>
        </Helmet>
        <h1 className="text-4xl flex gap-x-1 items-center">
            <Icon icon="mdi:emoticon-sad-outline" /> 404 not found
        </h1>

        <Link to="/" className="btn btn-md btn-blue filled mt-20 text-xl">
            <Icon icon="mdi:home" /> back to home
        </Link>
    </div>
);

export default NotFound;
