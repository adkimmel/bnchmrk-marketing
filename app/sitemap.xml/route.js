// app/sitemap.xml/route.js

export function GET() {
	const states = [
		"alabama",
		"alaska",
		"arizona",
		"arkansas",
		"california",
		"colorado",
		"connecticut",
		"delaware",
		"florida",
		"georgia",
		"hawaii",
		"idaho",
		"illinois",
		"indiana",
		"iowa",
		"kansas",
		"kentucky",
		"louisiana",
		"maine",
		"maryland",
		"massachusetts",
		"michigan",
		"minnesota",
		"mississippi",
		"missouri",
		"montana",
		"nebraska",
		"nevada",
		"new-hampshire",
		"new-jersey",
		"new-mexico",
		"new-york",
		"north-carolina",
		"north-dakota",
		"ohio",
		"oklahoma",
		"oregon",
		"pennsylvania",
		"rhode-island",
		"south-carolina",
		"south-dakota",
		"tennessee",
		"texas",
		"utah",
		"vermont",
		"virginia",
		"washington",
		"west-virginia",
		"wisconsin",
		"wyoming",
		"district-of-columbia",
	];

	const industries = [
		"accommodation-food-services",
		"agriculture-forestry-fishing-hunting",
		"arts-entertainment-recreation",
		"construction-buildings",
		"construction-heavy-civil-engineering",
		"construction-specialty-trade",
		"education-colleges-universities",
		"education-miscellaneous",
		"education-primary-secondary-schools",
		"financial-banking",
		"financial-credit-intermediation",
		"financial-insurance",
		"financial-investment-services",
		"healthcare-ambulatory-services",
		"healthcare-hospitals",
		"healthcare-nursing-residential-care",
		"healthcare-physicians-practitioners",
		"healthcare-social-services",
		"holding-companies",
		"information-media-production",
		"information-telecommunications",
		"manufacturing-chemicals",
		"manufacturing-consumer-goods",
		"manufacturing-electronic-components",
		"manufacturing-food",
		"manufacturing-machinery-equipment",
		"manufacturing-medical-instruments",
		"manufacturing-metal-mineral-products",
		"manufacturing-pharmaceutical",
		"manufacturing-transportation-aerospace",
		"oil-gas-production-mining",
		"public-administration-government",
		"real-estate",
		"rental-leasing",
		"retail-trade-motor-vehicle",
		"retail-trade-stores",
		"services-accounting-tax",
		"services-advertising-pr-market-research",
		"services-associations-organizations",
		"services-business-support-services",
		"services-consulting-services",
		"services-employment-services",
		"services-engineering-rd-architecture",
		"services-legal-services",
		"services-personal-care-dwelling",
		"services-repair-maintenance",
		"technology-computer-systems",
		"technology-research-development",
		"technology-software",
		"transportation-warehousing",
		"utilities",
		"waste-management-remediation",
		"wholesale-durable-goods",
		"wholesale-nondurable-goods",
	];

	// Create the static URLs
	const staticUrls = [
		{ loc: "https://www.bnchmrk.com", priority: "1.0", changefreq: "weekly" },
		{
			loc: "https://www.bnchmrk.com/features",
			priority: "0.8",
			changefreq: "monthly",
		},
		{
			loc: "https://www.bnchmrk.com/products",
			priority: "0.8",
			changefreq: "monthly",
		},
		{
			loc: "https://www.bnchmrk.com/explore-data",
			priority: "0.7",
			changefreq: "weekly",
		},
		{
			loc: "https://www.bnchmrk.com/contact",
			priority: "0.5",
			changefreq: "monthly",
		},
		{
			loc: "https://www.bnchmrk.com/employee-benefits-benchmarking",
			priority: "0.9",
			changefreq: "weekly",
		},
		{
			loc: "https://www.bnchmrk.com/request-more-info",
			priority: "0.6",
			changefreq: "monthly",
		},
		{
			loc: "https://www.bnchmrk.com/request-sample-report",
			priority: "0.6",
			changefreq: "monthly",
		},
		{
			loc: "https://www.bnchmrk.com/benchmarking",
			priority: "0.6",
			changefreq: "weekly",
		},
		{
			loc: "https://www.bnchmrk.com/benchmarking/why-employee-benefits-benchmarking-important",
			priority: "0.7",
			changefreq: "weekly",
		},
	];

	// Generate URLs for each state
	const locationUrls = states.map((state) => ({
		loc: `https://www.bnchmrk.com/explore-data/locations/${state}`,
		priority: "0.7",
		changefreq: "weekly",
	}));

	// Generate URLs for each industry
	const industryUrls = industries.map((ind) => ({
		loc: `https://www.bnchmrk.com/explore-data/industries/${ind}`,
		priority: "0.7",
		changefreq: "weekly",
	}));

	// Combine all URLs
	const allUrls = [...staticUrls, ...locationUrls, ...industryUrls];

	// Create the XML structure
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allUrls
				.map(
					(url) => `
        <url>
          <loc>${url.loc}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>${url.changefreq}</changefreq>
          <priority>${url.priority}</priority>
        </url>
      `
				)
				.join("")}
    </urlset>`;

	return new Response(sitemap, {
		headers: {
			"Content-Type": "application/xml",
			"Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
		},
	});
}
