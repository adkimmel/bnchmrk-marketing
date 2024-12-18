// app/components/AnalyticsOverview.js

"use client";
import { Box, Grid, Typography, Container } from "@mui/material";

const sections = [
	{
		title: "Comprehensive Dataset",
		description:
			"Bnchmrk's dataset spans 10,451 employers and 60,623 benefit plans, providing an unmatched foundation for benchmarking analytics.",
	},
	{
		title: "Empowering Decisions",
		description:
			"Combine a trusted database with tools to define cohorts, benchmark offerings, identify gaps, and align strategies with competitive demands.",
	},
	{
		title: "Big Data, the Backbone of Robust Reporting",
		description:
			"Leverage advanced technology and proprietary tools to analyze extensive benefit plan data, uncovering patterns and insights that smaller datasets often fail to reveal.",
	},
	{
		title: "Benefit Plan Sourcing, in Real-Time",
		description:
			"Our broad network of consultants and employers provides current data through surveys, CRMs, and management systems for timely, trustworthy analytics.",
	},
	{
		title: "Quality Assurance with Rigorous Validation",
		description:
			"Employ a multi-stage validation process to ensure data accuracy and reliability, offering metrics you can trust for actionable insights.",
	},
];

export default function AnalyticsOverview() {
	return (
		<Box
			sx={{
				backgroundColor: "white",
				py: { xs: "4rem", md: "6rem" },
			}}
		>
			<Container maxWidth="lg">
				{/* Header */}
				<Typography
					variant="h4"
					align="center"
					sx={{
						fontSize: { xs: "2rem", md: "2.5rem" },
						fontWeight: 700,
						color: "primary.main",
						mb: "2rem",
					}}
				>
					Benchmarking with Confidence
				</Typography>
				<Typography
					variant="body1"
					align="center"
					color="text.secondary"
					sx={{
						maxWidth: "800px",
						margin: "0 auto",
						mb: "4rem",
						fontSize: { xs: "1rem", md: "1.125rem" },
					}}
				>
					Empower your decision-making with a foundation of sound methodology
					and reliable information. Discover how our advanced technology and
					proprietary tools revolutionize employee benefits benchmarking.
				</Typography>

				{/* Column-Oriented Grid */}
				<Grid container>
					{sections.map((section, index) => (
						<Grid
							item
							xs={12}
							key={index}
							sx={{
								display: "flex",
								flexDirection: "column",
								background:
									index % 2 === 0
										? "linear-gradient(90deg, #1768AA 10%, #1768AA 100%)"
										: "linear-gradient(90deg, #F4B400 10%, #F4B400 100%)",
								padding: 4,
								marginBottom: 2,
								borderRadius: 4,
								overflow: "hidden",
								boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
								transition: "transform 0.3s ease, box-shadow 0.3s ease",
								"&:hover": {
									transform: "translateY(-6px)",
									boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
								},
							}}
						>
							{/* Content Section */}
							<Box
								sx={{
									flex: 1,
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
								}}
							>
								<Typography
									variant="h4"
									sx={{ fontWeight: 700, color: "#ffffff" }}
								>
									{section.title}
								</Typography>
								<Typography
									variant="subtitle1"
									sx={{ color: "rgba(255, 255, 255, 0.9)" }}
								>
									{section.description}
								</Typography>
							</Box>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
}
