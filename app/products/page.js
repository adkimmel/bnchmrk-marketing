// app/products/page.js

import { Box, Container, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import HeroLite from "@/components/HeroLite";
import IntroSection from "@/components/IntroSection";

export const metadata = {
	title: "Employee Benefits Benchmarking Pricing & Plans | Bnchmrk",
	description:
		"Choose from flexible pricing plans for employee benefits benchmarking. From individual reports to enterprise solutions, find the right plan for your organization.",
	openGraph: {
		title: "Transparent Pricing for Benefits Benchmarking | Bnchmrk",
		description:
			"Scale your benefits consulting with our flexible pricing plans. Access comprehensive benchmarking data with no hidden fees.",
		type: "website",
		url: "https://bnchmrk.com/products",
	},
	alternates: {
		canonical: "https://bnchmrk.com/products",
	},
};

const structuredData = {
	"@context": "https://schema.org",
	"@type": "PriceSpecification",
	name: "Bnchmrk Pricing Plans",
	description:
		"Flexible employee benefits benchmarking solutions with transparent pricing",
	offers: {
		"@type": "AggregateOffer",
		lowPrice: "349",
		highPrice: "34500",
		priceCurrency: "USD",
		offers: [
			{
				"@type": "Offer",
				name: "Individual Report",
				price: "349",
				priceCurrency: "USD",
				description: "Single employer benchmarking report",
			},
			{
				"@type": "Offer",
				name: "Essentials License",
				price: "10950",
				priceCurrency: "USD",
				description: "Annual license for up to 25 users",
			},
			{
				"@type": "Offer",
				name: "Advanced License",
				price: "19250",
				priceCurrency: "USD",
				description: "Annual license for up to 100 users",
			},
			{
				"@type": "Offer",
				name: "Enterprise License",
				price: "34500",
				priceCurrency: "USD",
				description: "Annual license for up to 250 users with API access",
			},
		],
	},
};

// Dynamically import below-the-fold component
const ProductsPricing = dynamic(() => import("@/components/ProductsPricing"), {
	ssr: true,
});

export default async function ProductsPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<HeroLite
				topText="Simple Pricing, Powerful Platform"
				bottomText="Choose the plan that fits your needs with transparent pricing and flexible options for organizations of any size"
			/>
			<IntroSection
				title="Flexible Solutions for Every Organization"
				subtitle="Whether you're an independent consultant or a large firm, Bnchmrk offers scalable pricing plans designed to grow with your business needs."
				description="Our transparent pricing model delivers enterprise-grade benchmarking capabilities with benefits that matter:"
				bulletPoints={[
					"All-inclusive access to our comprehensive benefits database with no hidden costs or per-report fees",
					"Flexible licensing options that scale from individual users to enterprise-wide deployment",
					"Free onboarding and training to ensure your team maximizes the platform's value from day one",
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
						Solutions That Scale With Your Success
					</Typography>
					<ProductsPricing />
				</Container>
			</Box>
		</>
	);
}
