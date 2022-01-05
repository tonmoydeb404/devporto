import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';

const Theme = ({ className }) => {
    const [dark, setDark] = useState(true);

    // initial setup
    useEffect(() => {
        if (localStorage.getItem('theme')) {
            setDark(localStorage.getItem('theme') === 'dark');
        }
    }, []);

    // track theme change
    useEffect(() => {
        const root = document.documentElement;

        // set theme
        root.classList.add(dark ? 'dark' : 'light');

        // set saved theme

        localStorage.setItem('theme', dark ? 'dark' : 'light');

        return () => {
            // cleanup
            localStorage.removeItem('theme');
            root.classList.remove('dark', 'light');
        };
    }, [dark]);

    return (
        <button
            className={`inline-block duration-150 py-3 px-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white ${className}`}
            type="button"
            onClick={() => setDark((prevValue) => !prevValue)}
        >
            <Icon
                className="m-0 p-0 text-[20px]"
                icon={`mdi-${dark ? 'white-balance-sunny' : 'weather-night'}`}
            />
        </button>
    );
};

export default Theme;
