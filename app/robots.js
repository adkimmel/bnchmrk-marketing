export default function robots() {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: [
				"/api/",
				"/private/",
				"https://app.bnchmrk.com/",
				"http://app.bnchmrk.com/",
				"https://app.bnchmrk.com/login",
				"http://app.bnchmrk.com/login",
			],
		},
		sitemap: "https://bnchmrk.com/sitemap.xml",
	};
}
