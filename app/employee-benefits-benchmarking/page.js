// app/employee-benefits-benchmarking/page.js

import { Box } from "@mui/material";
import HeroLite from "@/components/HeroLite";
import IntroSection from "@/components/IntroSection";
import WhatIsBenchmarking from "@/components/WhatIsBenchmarking";

export const metadata = {
	title: "Understanding Employee Benefits Benchmarking | Bnchmrk",
	description:
		"Learn how employee benefits benchmarking helps organizations evaluate and improve their benefits programs through industry comparisons and data analysis.",
	openGraph: {
		title: "Guide to Employee Benefits Benchmarking | Bnchmrk",
		description:
			"Understand the fundamentals of employee benefits benchmarking and how it helps organizations make informed benefits decisions.",
	},
	alternates: {
		canonical: "https://bnchmrk.com/employee-benefits-benchmarking",
	},
};

const structuredData = {
	"@context": "https://schema.org",
	"@type": "Article",
	headline: "What is Employee Benefits Benchmarking?",
	description:
		"Learn how employee benefits benchmarking helps organizations evaluate and optimize their benefits programs through industry comparisons and data-driven insights.",
	datePublished: "2023-01-01",
	dateModified: "2024-12-27",
	publisher: {
		"@type": "Organization",
		name: "Bnchmrk",
	},
	mainEntityOfPage: {
		"@type": "WebPage",
		"@id": "https://bnchmrk.com/employee-benefits-benchmarking",
	},
};

export default function EmployeeBenefitsBenchmarking() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<Box
				component="main"
				sx={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}
			>
				<HeroLite
					topText="The Future of Employee Benefits Benchmarking"
					bottomText="Empower your consulting practice with real-time insights and custom reporting that help your clients stay ahead in the benefits landscape."
				/>
				<IntroSection
					title="What is Employee Benefits Benchmarking?"
					subtitle="Employee benefits benchmarking is the process of comparing an organization's benefits programs against peers to evaluate competitiveness. For consultants, it's a critical tool to help clients make informed decisions and attract top talent."
					description="As an employee benefits consultant, your clients depend on you to provide actionable insights that improve their benefits strategies. What benchmarking brings to your clients:"
					bulletPoints={[
						"Cost Management: Highlight areas where clients may be overspending or underspending compared to industry averages.",
						"Competitive Advantage: Help clients offer benefits packages that attract and retain top-tier talent.",
					]}
				/>
				<WhatIsBenchmarking />
			</Box>
		</>
	);
}
