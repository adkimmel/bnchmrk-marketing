// app/explore-data/page.js

import { Box, Container, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import HeroLite from "@/components/HeroLite";
import IntroSection from "@/components/IntroSection";
import { employerFiltersApi } from "@/services/benchmarkingService";

export const metadata = {
	title: "Explore Employee Benefits Data by Industry & Location | Bnchmrk",
	description:
		"Access comprehensive employee benefits benchmarking data across industries and locations. Make data-driven decisions with insights filtered by sector, state, and company size.",
	openGraph: {
		title: "Employee Benefits Data Explorer | Bnchmrk",
		description:
			"Navigate employee benefits data by industry, location, and company size for informed decision-making.",
		type: "website",
		url: "https://bnchmrk.com/explore-data",
	},
	alternates: {
		canonical: "https://bnchmrk.com/explore-data",
	},
};

const structuredData = {
	"@context": "https://schema.org",
	"@type": "Dataset",
	name: "Employee Benefits Benchmarking Data Explorer",
	description:
		"Comprehensive analysis of employee benefits trends across industries and locations in the United States",
	creator: {
		"@type": "Organization",
		name: "Bnchmrk",
	},
	variableMeasured: [
		"Medical Plans",
		"Rx Prescription Drugs",
		"Dental Insurance",
		"Ancillary Benefits",
	],
	spatialCoverage: "United States",
	temporalCoverage: "2024/2025",
	keywords: [
		"employee benefits",
		"industry benchmarking",
		"healthcare costs",
		"benefits analysis",
		"compensation data",
	],
	includedInDataCatalog: {
		"@type": "DataCatalog",
		name: "U.S. Employee Benefits Database",
	},
};

// Dynamically import components below the fold
const ExploreIndustry = dynamic(() => import("@/components/ExploreIndustry"), {
	ssr: true,
});

const ExploreLocation = dynamic(() => import("@/components/ExploreLocation"), {
	ssr: true,
});

export default async function ExploreDataPage() {
	// Placeholder data
	const PLACEHOLDER_INDUSTRIES = [];
	const PLACEHOLDER_STATES = [];

	let industries = PLACEHOLDER_INDUSTRIES;
	let locationStates = PLACEHOLDER_STATES;

	try {
		const [filters] = await Promise.all([employerFiltersApi()]);

		if (filters?.ok) {
			industries = filters.industry || [];
			locationStates =
				filters.state?.sort((a, b) =>
					a.display_name.localeCompare(b.display_name)
				) || [];
		}
	} catch (error) {
		console.error("Error fetching data, using placeholders:", error);
	}

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<HeroLite
				topText="Explore Benefits Data By Industry & Location"
				bottomText="Access detailed benchmarking insights across industries, states, or employer size to make informed decisions for your clients"
			/>
			<IntroSection
				title="Comprehensive Benefits Data at Your Fingertips"
				subtitle="Navigate through our extensive database of employee benefits information, organized by industry sectors and geographic regions across the United States."
				description="Our segmented data approach helps you deliver more value to your clients through:"
				bulletPoints={[
					"Industry-specific benchmarking data that reflects the unique benefits landscape of each sector, from healthcare to manufacturing",
					"State-by-state analysis showing regional trends and variations in employee benefits offerings",
					"National benchmarking data filtered by industry or employee count, to match your client's profile",
					"Cross-industry comparisons to identify broader market trends and emerging benefit strategies",
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
						Dive Into Location-Based Benefits Benchmarking Data
					</Typography>
					<ExploreLocation locations={locationStates} />
				</Container>
			</Box>

			{/* ANALYTICS SECTION */}
			<Box sx={{ backgroundColor: "white", py: { xs: "4rem", md: "6rem" } }}>
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
						Powerful Industry Benefits Benchmarking Data at Scale
					</Typography>
					<ExploreIndustry industries={industries} />
				</Container>
			</Box>
		</>
	);
}
