// components/WhatIsBenchmarking.js

"use client";
import { Container, Typography, Box, Grid } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const features = [
	{
		title: "Real-Time Updates",
		description:
			"Traditional benchmarking reports often rely on data that's already outdated. A modern tool updates in real-time, ensuring your recommendations are based on the most current information available.",
	},
	{
		title: "Custom Reporting",
		description:
			"Every client has unique needs. A modern tool allows you to tailor reports to fit specific industries, geographic locations, and organizational sizes, delivering insights that truly matter.",
	},
	{
		title: "Data Visualization",
		description:
			"Present your findings with engaging visuals that make complex data easy to understand and actionable for your clients.",
	},
	{
		title: "Client Collaboration",
		description:
			"Use intuitive tools to share insights and collaborate with clients directly, enhancing the consulting experience.",
	},
];

export default function EmployeeBenefitsBenchmarking() {
	return (
		<Box sx={{ backgroundColor: "#f8fafc", py: { xs: 6, md: 10 } }}>
			<Container maxWidth="lg">
				<MotionBox
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					sx={{ mb: { xs: 4, md: 6 } }}
				>
					<Typography
						variant="h4"
						sx={{
							fontWeight: 700,
							mb: 2,
							background: "linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							textAlign: { xs: "left", md: "center" },
						}}
					>
						Why You Need a Modern Benchmarking Tool
					</Typography>
					<Typography
						variant="h6"
						color="text.secondary"
						sx={{
							maxWidth: "800px",
							mx: { xs: 0, md: "auto" },
							textAlign: { xs: "left", md: "center" },
						}}
					>
						In today's fast-paced benefits landscape, relying on outdated or
						static data is no longer sufficient. To meet client expectations and
						stay competitive, you need a tool that evolves with the market.
					</Typography>
				</MotionBox>

				<Grid container spacing={4}>
					{features.map((feature, index) => (
						<Grid item xs={12} sm={6} key={index}>
							<MotionBox
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
									type: "spring",
									stiffness: 100,
									damping: 15,
								}}
								viewport={{ once: true }}
								sx={{
									height: "100%",
									textAlign: "center",
									p: { xs: 3, md: 4 },
									backgroundColor: "white",
									boxShadow:
										"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
									borderRadius: "16px",
									transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
									border: "1px solid",
									borderColor: "divider",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									"&:hover": {
										transform: "translateY(-8px)",
										boxShadow:
											"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
										borderColor: "primary.main",
									},
								}}
							>
								<Typography
									variant="h5"
									sx={{
										mb: 2,
										fontWeight: 600,
										color: "text.primary",
									}}
								>
									{feature.title}
								</Typography>
								<Typography
									variant="body1"
									color="text.secondary"
									sx={{
										lineHeight: 1.7,
										maxWidth: "90%",
										mx: "auto",
									}}
								>
									{feature.description}
								</Typography>
							</MotionBox>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
}
