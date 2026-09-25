/** @type {import('next').NextConfig} */
const configuredDevOrigins = process.env.NEXT_ALLOWED_DEV_ORIGINS
	?.split(',')
	.map((origin) => origin.trim())
	.filter(Boolean) ?? [];

const nextConfig = {
	allowedDevOrigins: [
		'localhost',
		'127.0.0.1',
		'coachingbyceleste.com.au',
		'192.168.1.100',
        '220.235.230.214',
		...configuredDevOrigins,
	],
};

export default nextConfig;