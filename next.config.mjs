/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	compress: true,
	images: {
		domains: ["bnchmrk.com"],
		formats: ["image/webp"],
	},
	async redirects() {
		return [
			{
				source: "/request-benchmarking-report",
				destination: "/employee-more-info",
				permanent: true,
			},
			{
				source: "/data",
				destination: "/explore-data",
				permanent: true,
			},
		];
	},
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
	headers: async () => {
		return [
			{
				source: "/:path*",
				headers: [
					{
						key: "X-DNS-Prefetch-Control",
						value: "on",
					},
					{
						key: "Strict-Transport-Security",
						value: "max-age=63072000; includeSubDomains; preload",
					},
				],
			},
		];
	},
	compiler: {
		styledComponents: true,
	},
};

export default nextConfig;
