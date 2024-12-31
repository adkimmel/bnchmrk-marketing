// components/LocationOverview.js
"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function LocationOverview({
	employerCount,
	formattedLocationName,
	regionList,
}) {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: (i) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.2,
				duration: 0.8,
				ease: "easeOut",
			},
		}),
	};

	const benefitItems = [
		"🩺 Medical",
		"💊 Prescription Drugs",
		"🛡️ Stop Loss",
		"🦷 Dental",
		"👓 Vision",
		"💼 Life Insurance",
		"🕒 Short Term Disability",
		"⏳ Long Term Disability",
	];

	const analysisItems = [
		"Plan Design Analysis",
		"Gross Premium Rates",
		"Employee Contributions",
		"Strategic Planning",
		"Plan Prevalence",
		"Voluntary Coverage",
	];

	return (
		<Box
			ref={ref}
			component="section"
			sx={{
				position: "relative",
				py: { xs: 4, md: 6 },
				bgcolor: "background.default",
				overflow: "hidden",
			}}
		>
			{/* Decorative background elements */}
			<Box
				sx={{
					position: "absolute",
					top: "10%",
					left: "-5%",
					width: "35%",
					height: "80%",
					bgcolor: "primary.main",
					opacity: 0.03,
					transform: "skewY(-12deg)",
				}}
			/>

			<Container maxWidth="lg">
				<Grid container spacing={4}>
					{/* Cohort Overview Card */}
					<Grid item xs={12} md={6}>
						<motion.div
							custom={0}
							initial="hidden"
							animate={inView ? "visible" : "hidden"}
							variants={cardVariants}
						>
							<Box
								sx={{
									bgcolor: "background.paper",
									borderRadius: 3,
									p: { xs: 3, md: 4 },
									height: "100%",
									position: "relative",
									overflow: "hidden",
									boxShadow: "0 10px 40px -10px rgba(0,0,0,0.08)",
									transition: "transform 0.3s ease-in-out",
									"&:hover": {
										transform: "translateY(-4px)",
									},
								}}
							>
								<Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
									Cohort Snapshot
								</Typography>

								{/* Content remains the same but with enhanced typography styling */}
								<Typography
									variant="body1"
									sx={{ mb: 2, color: "text.secondary", lineHeight: 1.7 }}
								>
									Our database features{" "}
									<Box
										component="span"
										sx={{ color: "primary.main", fontWeight: 600 }}
									>
										{employerCount.employer_count.toLocaleString()} employers
									</Box>{" "}
									based in{" "}
									<Box
										component="span"
										sx={{ color: "primary.main", fontWeight: 600 }}
									>
										{formattedLocationName}
									</Box>
									, enabling precise geographical benchmarking for this area.
									Combine this with industry or organization size filters to
									create hyper-targeted comparisons tailored to your market.
								</Typography>
								<Typography
									variant="body1"
									sx={{ mb: 2, color: "text.secondary", lineHeight: 1.7 }}
								>
									Leverage these insights to make smarter renewal
									recommendations for key employee benefits, including:
								</Typography>

								<Grid container spacing={2}>
									<Grid item xs={5}>
										{benefitItems.map((item, i) => (
											<Typography
												key={i}
												variant="body2"
												sx={{
													mb: 1,
													fontWeight: 500,
													opacity: 0.9,
												}}
											>
												{item}
											</Typography>
										))}
									</Grid>
									<Grid item xs={7}>
										{analysisItems.map((item, i) => (
											<Typography
												key={i}
												variant="body2"
												sx={{
													mb: 1,
													color: "text.secondary",
													fontWeight: 500,
												}}
											>
												{item}
											</Typography>
										))}
									</Grid>
								</Grid>
							</Box>
						</motion.div>
					</Grid>

					{/* Classification Overview Card */}
					<Grid item xs={12} md={6}>
						<motion.div
							custom={1}
							initial="hidden"
							animate={inView ? "visible" : "hidden"}
							variants={cardVariants}
						>
							<Box
								sx={{
									bgcolor: "background.paper",
									borderRadius: 3,
									p: { xs: 3, md: 4 },
									height: "100%",
									position: "relative",
									overflow: "hidden",
									boxShadow: "0 10px 40px -10px rgba(0,0,0,0.08)",
									transition: "transform 0.3s ease-in-out",
									"&:hover": {
										transform: "translateY(-4px)",
									},
								}}
							>
								<Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
									Geographic Context
								</Typography>
								<Typography
									variant="body1"
									sx={{ mb: 3, color: "text.secondary", lineHeight: 1.7 }}
								>
									Understand market dynamics through a geographic lens.
									Bnchmrk's location-based analysis lets you examine benefits
									trends at state, regional, and multi-state levels, perfect for
									organizations with distributed workforces or those seeking to
									understand competitive markets.
								</Typography>
								<Typography
									variant="body1"
									sx={{ mb: 3, color: "text.secondary", lineHeight: 1.7 }}
								>
									The{" "}
									<Box
										component="span"
										sx={{ color: "primary.main", fontWeight: 600 }}
									>
										{regionList.states.length.toLocaleString()} neighboring
										states
									</Box>{" "}
									listed below share similar market characteristics with{" "}
									<Box
										component="span"
										sx={{ color: "primary.main", fontWeight: 600 }}
									>
										{formattedLocationName}
									</Box>
									. Use these as comparison points to understand regional trends
									and competitive positioning.
								</Typography>

								<Box sx={{ mt: 3 }}>
									{regionList.states.map((item, index) => (
										<Box
											key={item}
											sx={{
												mb: 1.5,
												pl: 2,
												py: 0.5,
												borderLeft: "2px solid",
												borderLeftColor: "primary.main",
												opacity: 0.9,
												transition: "opacity 0.2s ease-in-out",
												"&:hover": {
													opacity: 1,
												},
											}}
										>
											<Typography variant="body2" sx={{ fontWeight: 600 }}>
												{item}
											</Typography>
											<Link
												href={`/explore-data/locations/${item
													.replaceAll(" ", "-")
													.toLowerCase()}`}
												style={{ textDecoration: "none", width: "100%" }}
											>
												<Typography
													variant="caption"
													sx={{
														color: "primary.main",
														"&:hover": {
															textDecoration: "underline",
														},
													}}
												>
													Explore Data →
												</Typography>
											</Link>
										</Box>
									))}
								</Box>
							</Box>
						</motion.div>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
