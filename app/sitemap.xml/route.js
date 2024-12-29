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
		"accommodation_food_services",
		"agriculture_forestry_fishing_hunting",
		"arts_entertainment_recreation",
		"construction_buildings",
		"construction_heavy_civil_engineering",
		"construction_specialty_trade",
		"education_colleges_universities",
		"education_miscellaneous",
		"education_primary_secondary_schools",
		"financial_banking",
		"financial_credit_intermediation",
		"financial_insurance",
		"financial_investment_services",
		"healthcare_ambulatory_services",
		"healthcare_hospitals",
		"healthcare_nursing_residential_care",
		"healthcare_physicians_practitioners",
		"healthcare_social_services",
		"holding_companies",
		"information_media_production",
		"information_telecommunications",
		"manufacturing_chemicals",
		"manufacturing_consumer_goods",
		"manufacturing_electronic_components",
		"manufacturing_food",
		"manufacturing_machinery_equipment",
		"manufacturing_medical_instruments",
		"manufacturing_metal_mineral_products",
		"manufacturing_pharmaceutical",
		"manufacturing_transportation_aerospace",
		"oil_gas_production_mining",
		"public_administration_government",
		"real_estate",
		"rental_leasing",
		"retail_trade_motor_vehicle",
		"retail_trade_stores",
		"services_accounting_tax",
		"services_advertising_pr_market_research",
		"services_associations_organizations",
		"services_business_support_services",
		"services_consulting_services",
		"services_employment_services",
		"services_engineering_rd_architecture",
		"services_legal_services",
		"services_personal_care_dwelling",
		"services_repair_maintenance",
		"technology_computer_systems",
		"technology_research_development",
		"technology_software",
		"transportation_warehousing",
		"utilities",
		"waste_management_remediation",
		"wholesale_durable_goods",
		"wholesale_nondurable_goods",
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
