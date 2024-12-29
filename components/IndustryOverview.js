// components/IndustryOverview.js
"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function IndustryOverview({
	employerCount,
	formattedIndustryName,
	filteredNaics,
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
										sx={{
											color: "primary.main",
											fontWeight: 600,
										}}
									>
										{employerCount.employer_count.toLocaleString()} employers
									</Box>{" "}
									within the{" "}
									<Box
										component="span"
										sx={{ color: "primary.main", fontWeight: 600 }}
									>
										{formattedIndustryName}
									</Box>{" "}
									industry, providing a robust foundation of insights for this
									sector. By applying additional filters for location or
									organization size, you can further refine and explore this
									valuable data.
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
									Industry Segments
								</Typography>

								<Typography
									variant="body1"
									sx={{ mb: 3, color: "text.secondary", lineHeight: 1.7 }}
								>
									Bnchmrk leverages the North American Industry Classification
									System (NAICS) for its benchmarking classifications. The{" "}
									<Box
										component="span"
										sx={{ color: "primary.main", fontWeight: 600 }}
									>
										{formattedIndustryName}
									</Box>{" "}
									industry comprises of{" "}
									<Box
										component="span"
										sx={{ color: "primary.main", fontWeight: 600 }}
									>
										{filteredNaics.length.toLocaleString()} NAICS codes
									</Box>
									:
								</Typography>

								<Box sx={{ mt: 3 }}>
									{filteredNaics.map((item, index) => (
										<Box
											key={item.value}
											sx={{
												mb: 1,
												pl: 2,
												borderLeft: "2px solid",
												borderLeftColor: "primary.main",
												opacity: 0.9,
											}}
										>
											<Typography variant="body2" sx={{ fontWeight: 600 }}>
												{item.display_name.split(" - ")[1]}
											</Typography>
											<Typography
												variant="caption"
												sx={{ color: "text.secondary" }}
											>
												{item.display_name.split(" - ")[0]}
											</Typography>
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
