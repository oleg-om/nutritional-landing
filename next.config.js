/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/index.html',
                destination: '/',
                permanent: true,
            },
            {
                source: '/guides.html',
                destination: '/guides',
                permanent: true,
            },
            {
                source: '/guide.html',
                destination: '/guide',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
