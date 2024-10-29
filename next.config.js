/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Enable static exports
    images: {
        unoptimized: true,  // Required for static export
    },
    basePath: '',  // If using username.github.io, leave empty. If using a repo, add '/repo-name'
}

module.exports = nextConfig 