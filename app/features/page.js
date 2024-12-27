// app/features/page.js

import { Box, Container, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import HeroLite from "@/components/HeroLite";
import IntroSection from "@/components/IntroSection";
import Features from "@/components/Features";
import CTA from "@/components/CTA";

export const metadata = {
	title: "Employee Benefits Benchmarking Platform Features | Bnchmrk",
	description:
		"Discover Bnchmrk's innovative features: real-time data analysis, custom reporting, and precise analytics that revolutionize employee benefits benchmarking.",
	openGraph: {
		title: "Modern Benefits Benchmarking Platform Features | Bnchmrk",
		description:
			"Transform your benefits consulting with real-time analytics, custom reports, and precise data validation.",
		type: "website",
		url: "https://bnchmrk.com/features",
	},
	alternates: {
		canonical: "https://bnchmrk.com/features",
	},
};

const structuredData = {
	"@context": "https://schema.org",
	"@type": "Product",
	name: "Bnchmrk Benefits Analytics Platform",
	description:
		"Advanced employee benefits benchmarking platform with real-time analytics and custom reporting capabilities.",
	brand: {
		"@type": "Brand",
		name: "Bnchmrk",
	},
	applicationCategory: "Business Analytics Software",
	featureList: [
		"Real-time benefits data analysis",
		"Custom branded reporting",
		"Precise data validation",
		"Dedicated analyst support",
		"Cost-effective benchmarking solution",
		"Independent consulting platform",
	],
	audience: {
		"@type": "BusinessAudience",
		audienceType: "Benefits Consultants",
	},
};

// Dynamically import components below the fold
const AnalyticsOverview = dynamic(
	() => import("@/components/AnalyticsOverview"),
	{
		ssr: true,
	}
);

export default async function FeaturesPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<HeroLite
				topText="Powerful Features for Better Benchmarking"
				bottomText="Discover how our platform empowers your decision-making with real-time data and precise analytics"
			/>
			<IntroSection
				title="A New Approach to Benefits Benchmarking"
				subtitle="Bnchmrk is evolving employee benefits benchmarking with its big-data platform, powered by a proprietary benefits data warehouse and easy-to-use reporting tools."
				description="The web-based benchmarking app differentiates benefit professionals from the competition by improving critical business functions:"
				bulletPoints={[
					"Reduce the time spent on collecting, refining, and analyzing employee benefit benchmarking data.",
					"Make smarter recommendations to employers on plan design and rate changes during pre-renewal analysis.",
					"Gain a marketing wedge with prospects who want to see how they compare to actionable market data.",
				]}
			/>
			<Box
				sx={{
					backgroundColor: "#F4F6F8",
					py: { xs: "4rem", md: "6rem" },
					position: "relative",
				}}
			>
				<Container maxWidth="lg">
					<Typography
						variant="h2"
						sx={{
							textAlign: "center",
							mb: { xs: 4, md: 6 },
							fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
							fontWeight: 700,
						}}
					>
						Everything You Need in One Platform
					</Typography>
					<Features />
				</Container>
			</Box>

			{/* CALL TO ACTION SECTION */}
			<Box
				sx={{ backgroundColor: "primary.main", py: { xs: "4rem", md: "6rem" } }}
			>
				<CTA />
			</Box>

			{/* ANALYTICS SECTION */}
			<Box sx={{ backgroundColor: "white", py: { xs: "4rem", md: "6rem" } }}>
				<Container maxWidth="lg">
					<AnalyticsOverview />
				</Container>
			</Box>
		</>
	);
}
