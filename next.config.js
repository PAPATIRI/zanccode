/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: 'default',
        domains: ['blog.zanccode.site'],
    },
};

module.exports = nextConfig;
