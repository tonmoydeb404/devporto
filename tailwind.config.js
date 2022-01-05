module.exports = {
    content: ['./*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                mono: ['Montserrat'],
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '8rem',
                    md: '4rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem',
                },
            },
            screens: {
                xs: '500px',
            },
        },
    },
    plugins: [],
};
