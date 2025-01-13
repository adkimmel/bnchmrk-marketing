import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import HeroLite from "@/components/HeroLite";

export const metadata = {
	title: "Employee Benefits Benchmarking | Insights and Guides | Bnchmrk",
	description:
		"Explore in-depth guides and insights about employee benefits benchmarking.",
	openGraph: {
		title: "Employee Benefits Benchmarking Resources | Bnchmrk",
		description:
			"Comprehensive guides and insights on employee benefits benchmarking for consultants and organizations.",
	},
	alternates: {
		canonical: "https://bnchmrk.com/benchmarking",
	},
};

const structuredData = {
	"@context": "https://schema.org",
	"@type": "Article",
	headline: "Employee Benefits Benchmarking Insights and Guides",
	description:
		"Expert guides and resources for employee benefits benchmarking, covering topics from talent retention to ROI optimization.",
	datePublished: "2025-01-01",
	dateModified: "2025-01-08",
	publisher: {
		"@type": "Organization",
		name: "Bnchmrk",
	},
	mainEntityOfPage: {
		"@type": "WebPage",
		"@id": "https://bnchmrk.com/benchmarking",
	},
};

export default function Benchmarking() {
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
					topText="Employee Benefits Benchmarking Insights"
					bottomText="Explore expert guides on employee benefits benchmarking, from attracting top talent to optimizing costs and staying ahead of industry trends."
				/>
				<Container maxWidth="md" sx={{ py: 8 }}>
					<Typography variant="body1" paragraph sx={{ mb: 4 }}>
						Browse our growing collection of resources and guides designed to
						help you master employee benefits benchmarking:
					</Typography>
					<Box
						component="nav"
						sx={{
							"& ul": {
								listStyle: "none",
								padding: 0,
								margin: 0,
							},
							"& li": {
								mb: 2,
								"& a": {
									color: "primary.main",
									textDecoration: "none",
									fontSize: "1.1rem",
									"&:hover": {
										textDecoration: "underline",
									},
								},
							},
						}}
					>
						<ul>
							<li>
								<Link href="/benchmarking/why-employee-benefits-benchmarking-important">
									Why Employee Benefits Benchmarking Is Important
								</Link>
							</li>
							{/* <li>
								<Link href="/benchmarking/real-time-employee-benefits-benchmarking">
									Real-Time Employee Benefits Benchmarking
								</Link>
							</li>
							<li>
								<Link href="/benchmarking/attract-retain-top-talent-better-benefits">
									Attract and Retain Top Talent with Better Benefits
								</Link>
							</li>
							<li>
								<Link href="/benchmarking/industry-specific-benchmarking-insights">
									Industry-Specific Benchmarking Insights
								</Link>
							</li>
							<li>
								<Link href="/benchmarking/regional-benefits-trends">
									Regional Trends in Employee Benefits
								</Link>
							</li>
							<li>
								<Link href="/benchmarking/maximize-roi-employee-benefits-benchmarking">
									Maximize ROI with Employee Benefits Benchmarking
								</Link>
							</li>
							<li>
								<Link href="/benchmarking/custom-reporting-employee-benefits-benchmarking">
									Customizable Reporting for Employee Benefits Benchmarking
								</Link>
							</li> */}
						</ul>
					</Box>
				</Container>
			</Box>
		</>
	);
}
