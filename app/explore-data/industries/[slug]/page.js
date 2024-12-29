// app/explore-data/industries/[slug]/page.js

import { Container, Box, Typography, Grid } from "@mui/material";
import dynamic from "next/dynamic";
import HeroLiteAlt from "@/components/HeroLiteAlt";
import IndustryOverview from "@/components/IndustryOverview";
import { employerCountApi, getNaicsApi } from "@/services/benchmarkingService";

async function getData(slug) {
	try {
		const [employerData, naicsData] = await Promise.all([
			employerCountApi({
				industry: [slug],
				state: [],
				size: [],
				other: [],
			}).catch(() => ({ ok: false, employer_count: 10535 })),
			getNaicsApi().catch(() => ({ ok: false, list: [] })),
		]);

		return {
			employerCount: employerData.ok ? employerData : { employer_count: 10535 },
			naics: naicsData.ok ? naicsData.list : [],
		};
	} catch (error) {
		console.error("Error fetching data:", error);
		return {
			employerCount: { employer_count: 10535 },
			naics: [],
		};
	}
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const industryName = slug
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");

	return {
		title: `${industryName} Benefits Benchmarking Data & Insights | Bnchmrk`,
		description: `Access comprehensive employee benefits benchmarking data for the ${industryName} industry. Compare costs, plan designs, and trends specific to ${industryName} employers.`,
		openGraph: {
			title: `${industryName} Benefits Benchmarking Analysis | Bnchmrk`,
			description: `Get actionable ${industryName} industry benefits insights and trends. Make data-driven decisions with comprehensive benchmarking data.`,
			url: `https://bnchmrk.com/explore-data/industries/${slug}`,
		},
		alternates: {
			canonical: `https://bnchmrk.com/explore-data/industries/${slug}`,
		},
	};
}

function generateStructuredData(industryName, employerCount, naicsCodes) {
	return {
		"@context": "https://schema.org",
		"@type": "DataCatalog",
		name: `${industryName} Benefits Benchmarking Data`,
		description: `Employee benefits benchmarking data and analytics for the ${industryName} industry`,
		provider: {
			"@type": "Organization",
			name: "Bnchmrk",
		},
		dataset: {
			"@type": "Dataset",
			name: `${industryName} Benefits Data`,
			description: `Comprehensive benefits data from ${employerCount.toLocaleString()} employers in the ${industryName} industry`,
			keywords: [
				"employee benefits",
				industryName,
				"benchmarking",
				"healthcare costs",
				"insurance plans",
			],
			variableMeasured: [
				"Medical Plans",
				"Prescription Drug Coverage",
				"Dental Plans",
				"Vision Plans",
				"Life Insurance",
				"Disability Insurance",
			],
			naicsCodes: naicsCodes.map((code) => code.display_name),
		},
	};
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

export default async function IndustryPage({ params }) {
	const { slug } = await params;

	const compareSlug = slug.replaceAll("-", "_");

	const { employerCount, naics } = await getData(compareSlug);

	const formattedIndustryName = slug
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");

	const filteredNaics = naics.filter(
		(item) => item.industry.short_name === compareSlug
	);

	const structuredData = generateStructuredData(
		formattedIndustryName,
		employerCount.employer_count,
		filteredNaics
	);

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<HeroLiteAlt
				topText={`${formattedIndustryName} Insights`}
				bottomText={`Delve into the latest trends and metrics shaping the ${formattedIndustryName} industry. From competitive employer contributions to coverage rates and premiums, gain actionable insights to help your client or HR teams attract, retain, and reward top talent in an increasingly competitive landscape.`}
			/>
			<IndustryOverview
				employerCount={employerCount}
				formattedIndustryName={formattedIndustryName}
				filteredNaics={filteredNaics}
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
								defaultMessage={`I'm interested in learning more about a benchmarking report for the ${formattedIndustryName} industry.`}
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
									a competitive edge in the {formattedIndustryName} sector?
									Bnchmrk's proprietary database empowers your teams with
									actionable insights to support clients and drive sales
									success.
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
