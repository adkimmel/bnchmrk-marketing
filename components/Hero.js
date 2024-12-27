// components/Hero.js
"use client";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
	const fadeUpVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	const buttonVariants = {
		hover: {
			scale: 1.05,
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 10,
			},
		},
		tap: { scale: 0.95 },
	};

	return (
		<Box
			component="section"
			role="banner"
			aria-label="Hero section"
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				minHeight: { xs: "60vh", md: "75vh" },
				position: "relative",
				overflow: "hidden",
			}}
		>
			{/* Background gradient effect */}
			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					background:
						"radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
					pointerEvents: "none",
				}}
			/>

			<Container
				maxWidth="md"
				sx={{ textAlign: "center", position: "relative" }}
			>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={fadeUpVariants}
					transition={{ duration: 0.6 }}
				>
					<Typography
						variant="h1"
						gutterBottom
						sx={{
							fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
							fontWeight: 700,
							background:
								"linear-gradient(45deg, #fff 30%, rgba(255,255,255,0.8) 90%)",
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							marginBottom: "1.5rem",
						}}
					>
						Unlock Market Insights Like Never Before
					</Typography>
				</motion.div>

				<motion.div
					initial="hidden"
					animate="visible"
					variants={fadeUpVariants}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<Typography
						variant="h6"
						sx={{
							marginBottom: "2.5rem",
							fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
							fontWeight: 400,
							opacity: 0.9,
							maxWidth: "800px",
							mx: "auto",
							lineHeight: 1.6,
						}}
					>
						The most comprehensive, data-driven benchmarking platform for the
						employee benefits industry.
					</Typography>
				</motion.div>

				<motion.div
					initial="hidden"
					animate="visible"
					variants={fadeUpVariants}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: { xs: "column", sm: "row" },
							gap: "1rem",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<motion.div
							variants={buttonVariants}
							whileHover="hover"
							whileTap="tap"
						>
							<Button
								variant="contained"
								color="secondary"
								href="/request-sample-report"
								endIcon={<ArrowRight size={20} />}
								sx={{
									padding: "0.75rem 2rem",
									fontSize: "1.1rem",
									borderRadius: "8px",
									textTransform: "none",
									fontWeight: 600,
									boxShadow: "0 4px 14px 0 rgba(0,0,0,0.25)",
								}}
							>
								Request a Sample Report
							</Button>
						</motion.div>

						<motion.div
							variants={buttonVariants}
							whileHover="hover"
							whileTap="tap"
						>
							<Button
								variant="outlined"
								color="inherit"
								startIcon={<Play size={20} />}
								href="/employee-benefits-benchmarking"
								sx={{
									padding: "0.75rem 2rem",
									fontSize: "1.1rem",
									borderRadius: "8px",
									textTransform: "none",
									fontWeight: 600,
									borderColor: "rgba(255,255,255,0.5)",
									color: "white",
									backdropFilter: "blur(8px)",
									backgroundColor: "rgba(255,255,255,0.1)",
									"&:hover": {
										borderColor: "white",
										backgroundColor: "rgba(255,255,255,0.15)",
									},
								}}
							>
								Employee Benefits Benchmarking
							</Button>
						</motion.div>
					</Box>
				</motion.div>
			</Container>
		</Box>
	);
}
