// module.exports = {
//     images: {
//         formats: ['image/avif', 'image/webp'],
//         remotePatterns: [{
//             protocol: 'https',
//             hostname: 'res.cloudinary.com',
//             port: '',
//             // pathname: '/my-account/**',
//             pathname: '/dcxf9hu8k/image/upload/**',
//         }, ],
//     },
// }

// next.config.js

module.exports = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [{
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/dcxf9hu8k/image/upload/**', // Update the pathname to match your specific path
        }, ],
    },
    // Other Next.js configurations
}