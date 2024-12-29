// app/explore-data/locations/[slug]/page.js

import { Container, Box, Typography, Grid } from "@mui/material";
import dynamic from "next/dynamic";
import HeroLiteAlt from "@/components/HeroLiteAlt";
import LocationOverview from "@/components/LocationOverview";
import { employerCountApi } from "@/services/benchmarkingService";
import {
	slugToAbbr,
	statesAbbrLookup,
	regionList,
} from "@/utils/locationConfig";

async function getData(slug) {
	try {
		const [employerData] = await Promise.all([
			employerCountApi({
				industry: [],
				state: [slug],
				size: [],
				other: [],
			}).catch(() => ({ ok: false, employer_count: 10535 })),
		]);

		return {
			employerCount: employerData.ok ? employerData : { employer_count: 10535 },
		};
	} catch (error) {
		console.error("Error fetching data:", error);
		return {
			employerCount: { employer_count: 10535 },
		};
	}
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const abbrSlug = slugToAbbr[slug];
	const locationState = statesAbbrLookup[abbrSlug].text;

	return {
		title: `${locationState} Benefits & Healthcare Cost Benchmarks | Bnchmrk`,
		description: `Access regional employee benefits benchmarking data for ${locationState}. Compare local plan costs, designs, and employer contribution trends in the ${locationState} market.`,
		openGraph: {
			title: `${locationState} Healthcare & Benefits Cost Analysis | Bnchmrk`,
			description: `Unlock ${locationState} market insights with local benefits benchmarking data. Understand regional trends and make strategic decisions with area-specific analytics.`,
			url: `https://bnchmrk.com/explore-data/locations/${slug}`,
		},
		alternates: {
			canonical: `https://bnchmrk.com/explore-data/locations/${slug}`,
		},
	};
}

function generateStructuredData(locationState, employerCount) {
	return {
		"@context": "https://schema.org",
		"@type": "DataCatalog",
		name: `${locationState} Regional Benefits & Healthcare Benchmarks`,
		description: `Local employee benefits and healthcare cost analytics for employers in ${locationState}`,
		provider: {
			"@type": "Organization",
			name: "Bnchmrk",
		},
		dataset: {
			"@type": "Dataset",
			name: `${locationState} Market Benefits Analysis`,
			description: `Area-specific benefits data from ${employerCount.toLocaleString()} employers across ${locationState}, including plan designs, costs, and market trends`,
			keywords: [
				"healthcare costs",
				locationState,
				"benefits data",
				"regional benchmarking",
				"local market trends",
				"employer contributions",
				"plan design analysis",
			],
			variableMeasured: [
				"Medical Plan Designs",
				"Drug Formularies",
				"Dental Coverage",
				"Vision Benefits",
				"Life & Disability",
				"Employee Contributions",
				"Stop Loss Coverage",
				"Regional Cost Trends",
			],
		},
	};
}

function findRegionByState(regionList, state_name) {
	const normalizedStateName = state_name.replaceAll("-", " ").toLowerCase();

	for (const region of regionList) {
		for (const state of region.states) {
			const normalizedState = state.toLowerCase();
			if (normalizedState === normalizedStateName) {
				// Create a new region object with the matching state filtered out
				return {
					...region,
					states: region.states.filter(
						(s) => s.toLowerCase() !== normalizedStateName
					),
				};
			}
		}
	}
	return null;
}

const RequestSampleForm = dynamic(
	() => import("@/components/RequestSampleForm"),
	{
		ssr: true,
	}
);

const PercentileChartWrapper = dynamic(
	() => import("@/components/PercentileChartWrapper"),
	{
		ssr: true,
	}
);

export default async function LocationPage({ params }) {
	const { slug } = await params;

	const abbrSlug = slugToAbbr[slug];

	const { employerCount } = await getData(abbrSlug);

	const formattedLocationName =
		abbrSlug === "DC"
			? statesAbbrLookup[abbrSlug].text
			: `State of ${statesAbbrLookup[abbrSlug].text}`;

	const region = findRegionByState(regionList, slug);

	const structuredData = generateStructuredData(
		formattedLocationName,
		employerCount.employer_count
	);

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<HeroLiteAlt
				topText={`${formattedLocationName} Insights`}
				bottomText={`Delve into the latest trends and metrics shaping the ${formattedLocationName}. From competitive employer contributions to coverage rates and premiums, gain actionable insights to help your client or HR teams attract, retain, and reward top talent in an increasingly competitive landscape.`}
			/>
			<LocationOverview
				employerCount={employerCount}
				formattedLocationName={formattedLocationName}
				regionList={region}
			/>

			<PercentileChartWrapper />
			<Container maxWidth="lg">
				<Box
					sx={{
						marginTop: 8,
						padding: 4,
						borderRadius: 2,
						boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
						backgroundColor: "primary.main",
						color: "primary.contrastText",
					}}
				>
					<Typography
						variant="h5"
						sx={{
							fontWeight: 700,
							marginBottom: 4,
							textAlign: "center",
						}}
					>
						Request More Information
					</Typography>
					<Grid container spacing={4}>
						{/* Form Section */}
						<Grid item xs={12} md={6}>
							<RequestSampleForm
								defaultMessage={`I'm interested in learning more about a benchmarking report for the ${formattedLocationName}.`}
							/>
						</Grid>

						{/* Additional Info Section */}
						<Grid item xs={12} md={6}>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									gap: 2,
								}}
							>
								<Typography variant="body1" sx={{ fontWeight: 700 }}>
									Unlock Key Insights to Elevate Your Employee Benefits
									Expertise
								</Typography>
								<Typography variant="body1" color="primary.contrastText">
									Are you in the employee benefits industry and looking to gain
									a competitive edge in {formattedLocationName}? Bnchmrk's
									proprietary database empowers your teams with actionable
									insights to support clients and drive sales success.
								</Typography>
								<Typography variant="body1" color="primary.contrastText">
									By completing this form, you'll receive a sample report
									showcasing how our insights can enhance your consulting
									services and help you deliver impactful solutions across all
									client and sales teams.
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</>
	);
}
