export default function robots() {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: [
				"/api/",
				"/private/",
				"/terms-of-service/",
				"/terms-of-service",
				"/privacy-policy/",
				"/privacy-policy",
				"https://app.bnchmrk.com/",
				"http://app.bnchmrk.com/",
				"https://app.bnchmrk.com/login",
				"http://app.bnchmrk.com/login",
			],
		},
		sitemap: "https://bnchmrk.com/sitemap.xml",
	};
}
