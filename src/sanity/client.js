import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: import.meta.env.VITE_PROJECT_ID,
    dataset: 'production',
    token: import.meta.env.VITE_API_KEY,
    useCdn: true,
});

export default client;
