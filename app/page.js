// app/page.js

import { Box, Container } from "@mui/material";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AnalyticsOverview from "@/components/AnalyticsOverview";
import ExploreIndustry from "@/components/ExploreIndustry";
import CTA from "@/components/CTA";
import SectionHeading from "@/components/SectionHeading";
import {
	employerFiltersApi,
	employerCountApi,
	getTotalPlans,
} from "@/services/benchmarkingService";

export const metadata = {
	title: "Bnchmrk - Employee Benefits Benchmarking Platform",
	description:
		"Access real-time employee benefits benchmarking data with comprehensive analytics covering industry-specific insights across all 50 states.",
	openGraph: {
		title: "Bnchmrk - Employee Benefits Benchmarking Platform",
		description:
			"Access real-time employee benefits benchmarking data spanning industries and regions.",
	},
	alternates: {
		canonical: "https://bnchmrk.com/",
	},
};

const structuredData = {
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	name: "Bnchmrk",
	applicationCategory: "BusinessApplication",
	description:
		"Employee benefits benchmarking platform with data from over 10,000 employers and 60,000 benefit plans.",
	offers: {
		"@type": "Offer",
		price: "10950",
		priceCurrency: "USD",
	},
};

// Dynamically import components below the fold
const ExploreLocation = dynamic(() => import("@/components/ExploreLocation"), {
	ssr: true,
});

const ProductsPricing = dynamic(() => import("@/components/ProductsPricing"), {
	ssr: true,
});

const Contact = dynamic(() => import("@/components/Contact"), {
	ssr: true,
});

export default async function HomePage() {
	// Placeholder data
	const PLACEHOLDER_EMPLOYER_COUNT = { employer_count: 10535 };
	const PLACEHOLDER_PLAN_COUNTS = { plans: 62019 };
	const PLACEHOLDER_INDUSTRIES = [];
	const PLACEHOLDER_STATES = [];

	let employerCount = PLACEHOLDER_EMPLOYER_COUNT;
	let planCounts = PLACEHOLDER_PLAN_COUNTS;
	let industries = PLACEHOLDER_INDUSTRIES;
	let locationStates = PLACEHOLDER_STATES;

	try {
		const [
			{ ok: countOk, ...fetchedEmployerCount },
			{ ok: planOk, ...fetchedPlanCounts },
			filters,
		] = await Promise.all([
			employerCountApi({
				industry: [],
				state: [],
				size: [],
				other: [],
			}),
			getTotalPlans(),
			employerFiltersApi(),
		]);

		if (countOk) employerCount = fetchedEmployerCount;
		if (planOk) planCounts = fetchedPlanCounts;

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

	const totalPlanCount = Object.values(planCounts).reduce(
		(acc, val) => acc + val,
		0
	);

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>

			{/* Hero Section */}
			<Box
				id="hero"
				role="banner"
				sx={{ backgroundColor: "primary.main", color: "white" }}
			>
				<Hero />
			</Box>

			{/* Features Section */}
			<Box
				id="features"
				role="region"
				aria-label="Features"
				sx={{ backgroundColor: "#F4F6F8", py: { xs: "4rem", md: "6rem" } }}
			>
				<Container maxWidth="lg">
					<SectionHeading topText="Why Choose Us?" />
					<Features />
				</Container>
			</Box>

			{/* Analytics Section */}
			<Box
				id="analytics"
				role="region"
				aria-label="Analytics Overview"
				sx={{ backgroundColor: "white", py: { xs: "4rem", md: "6rem" } }}
			>
				<Container maxWidth="lg">
					<SectionHeading
						topText="Benchmarking with Confidence"
						bodyText={`Empower your decision-making with confidence, supported by sound
            methodology and reliable insights. The Bnchmrk app provides access to a
            comprehensive dataset of ${employerCount.employer_count.toLocaleString()} employers and
            ${totalPlanCount.toLocaleString()} benefit plans. Leverage advanced technology and
            proprietary tools to revolutionize employee benefits benchmarking and uncover actionable
            strategies with ease.`}
					/>
					<AnalyticsOverview />
				</Container>
			</Box>

			{/* Industry Explore Section */}
			<Box
				id="explore"
				role="region"
				aria-label="Industry Explorer"
				sx={{ backgroundColor: "#f9f9f9", py: { xs: "4rem", md: "6rem" } }}
			>
				<Container maxWidth="lg">
					<SectionHeading
						topText="Explore Benchmarking by Industry"
						bodyText={`Explore how the industries in your book of business compare with
              others using Bnchmrk's real-time benchmarking database. With data
              spanning ${industries.length || 54} industries, our comprehensive
              dataset provides actionable insights into benefit plans, trends,
              and performance metrics. Analyze your client distribution and
              uncover the data that drives smarter decisions.`}
					/>
					<ExploreIndustry industries={industries} />
				</Container>
			</Box>

			{/* Call to Action Section */}
			<Box
				id="call-to-action"
				role="complementary"
				sx={{ backgroundColor: "primary.main", py: { xs: "4rem", md: "6rem" } }}
			>
				<CTA />
			</Box>

			{/* Location Explore Section */}
			<Box
				id="explore-location"
				role="region"
				aria-label="Location Explorer"
				sx={{ backgroundColor: "#f9f9f9", py: { xs: "4rem", md: "6rem" } }}
			>
				<Container maxWidth="lg">
					<SectionHeading
						topText="Explore Benchmarking by Location"
						bodyText="Dive into detailed benchmarking insights by state or region. Explore how benefit trends, plan metrics, and other key data points vary across all 50 states and DC."
					/>
					<ExploreLocation locations={locationStates} />
				</Container>
			</Box>

			{/* Products & Pricing Section */}
			<Box
				id="pricing"
				role="region"
				aria-label="Products and Pricing"
				sx={{ backgroundColor: "#f4f6f8", py: { xs: "4rem", md: "6rem" } }}
			>
				<Container maxWidth="lg">
					<SectionHeading
						topText="Products & Pricing"
						bodyText="Whether your employee benefit benchmarking needs are large or small, we've got the right product for you. Single reports are ideal for first-time users looking to kick the tires, while annual licenses are designed for firms looking to integrate benchmarking across their account management and sales teams."
					/>
					<ProductsPricing />
				</Container>
			</Box>

			{/* Contact Section */}
			<Box
				id="contact"
				role="region"
				aria-label="Contact Us"
				sx={{
					backgroundColor: "primary.main",
					color: "white",
					py: { xs: "4rem", md: "6rem" },
				}}
			>
				<Container maxWidth="lg">
					<SectionHeading
						topText="Contact Us"
						bodyText="Have questions? Need help? Our team is here to assist you with all your benchmarking needs. Feel free to reach out via the form below or by using the provided contact information."
						color="white"
					/>
					<Contact />
				</Container>
			</Box>
		</>
	);
}
