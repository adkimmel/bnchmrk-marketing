// app/request-sample-report/page.js

import { Box, Typography, Container, Grid } from "@mui/material";
import dynamic from "next/dynamic";

export const metadata = {
	title: "Request Employee Benefits Benchmarking Information | Bnchmrk",
	description:
		"Learn about Bnchmrk's comprehensive benefits benchmarking solutions. Get pricing details and discover how our platform can transform your benefits consulting.",
	openGraph: {
		title: "Benefits Benchmarking Solutions & Pricing | Bnchmrk",
		description:
			"Transform your benefits consulting with data-driven insights. Request information about our flexible solutions and pricing options.",
		type: "website",
		url: "https://bnchmrk.com/request-more-info",
	},
	alternates: {
		canonical: "https://bnchmrk.com/request-more-info",
	},
};

const structuredData = {
	"@context": "https://schema.org",
	"@type": "ContactPage",
	name: "Product Information Request",
	description:
		"Request information about Bnchmrk's benefits benchmarking solutions",
	mainEntity: {
		"@type": "ContactPoint",
		contactType: "sales",
		availableLanguage: "English",
		areaServed: "US",
	},
	potentialAction: {
		"@type": "LeadAction",
		target: {
			"@type": "EntryPoint",
			urlTemplate: "https://bnchmrk.com/request-more-info",
			actionPlatform: ["http://schema.org/DesktopWebPlatform"],
		},
	},
	offers: {
		"@type": "AggregateOffer",
		lowPrice: "349",
		highPrice: "34500",
		priceCurrency: "USD",
	},
};

// Dynamic import for form component
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
	ssr: true,
});

const RequestForm = dynamic(() => import("@/components/RequestForm"), {
	ssr: true,
});

export default function RequestMoreInfo() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<Box sx={{ backgroundColor: "#f9f9f9", minHeight: "100vh", paddingY: 4 }}>
				<Container maxWidth="lg">
					<Box
						sx={{
							textAlign: "center",
							paddingY: 4,
							backgroundColor: "primary.dark",
							color: "white",
							borderRadius: 2,
							marginBottom: 4,
						}}
					>
						<Typography variant="h3" sx={{ fontWeight: 700, marginBottom: 2 }}>
							Request More Information
						</Typography>
						<Container maxWidth="md">
							<Typography variant="body1" sx={{ fontSize: "1.125rem" }}>
								Learn more about how Bnchmrk can empower your organization with
								actionable data and insights tailored to your unique needs.
							</Typography>
						</Container>
					</Box>
					<Grid container spacing={6} alignItems="stretch">
						<Grid item xs={12} md={6}>
							<Testimonials />
						</Grid>
						<Grid item xs={12} md={6}>
							<RequestForm
								header="Request For More Product Info"
								formText="Discover the Power of Tailored Insights"
							/>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
}
