// app/request-sample-report/page.js

import { Box, Typography, Container, Grid } from "@mui/material";
import dynamic from "next/dynamic";

export const metadata = {
	title: "Request Sample Benefits Benchmarking Report | Bnchmrk",
	description:
		"Get a free sample report showcasing Bnchmrk's comprehensive employee benefits benchmarking data and analytics capabilities.",
	openGraph: {
		title: "Free Benefits Benchmarking Sample Report | Bnchmrk",
		description:
			"Experience our powerful benchmarking platform with a complimentary sample report tailored to your needs.",
		type: "website",
		url: "https://bnchmrk.com/request-sample-report",
	},
	alternates: {
		canonical: "https://bnchmrk.com/request-sample-report",
	},
};

const structuredData = {
	"@context": "https://schema.org",
	"@type": "ContactPage",
	name: "Sample Report Request",
	description: "Request a free sample benefits benchmarking report",
	mainEntity: {
		"@type": "ContactPoint",
		contactType: "sales",
		availableLanguage: "English",
	},
	potentialAction: {
		"@type": "ReservationAction",
		target: {
			"@type": "EntryPoint",
			urlTemplate: "https://bnchmrk.com/request-sample-report",
			actionPlatform: ["http://schema.org/DesktopWebPlatform"],
		},
		result: {
			"@type": "Report",
			name: "Benefits Benchmarking Sample Report",
		},
	},
};

// Dynamic import for form component
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
	ssr: true,
});

const RequestForm = dynamic(() => import("@/components/RequestForm"), {
	ssr: true,
});

export default function RequestSampleReport() {
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
							Request a Sample Report
						</Typography>
						<Container maxWidth="md">
							<Typography variant="body1" sx={{ fontSize: "1.125rem" }}>
								See how Bnchmrk’s powerful benchmarking capabilities can work
								for you.
							</Typography>
						</Container>
					</Box>
					<Grid container spacing={6} alignItems="stretch">
						<Grid item xs={12} md={6}>
							<Testimonials />
						</Grid>
						<Grid item xs={12} md={6}>
							<RequestForm
								header="Sample Report Request"
								formText="Get Your Sample Report"
							/>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
}
