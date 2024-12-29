"use client";
import dynamic from "next/dynamic";
import { Box, Container, Grid, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Info, LineChart, AlertCircle } from "lucide-react";
import BenchmarkTable from "@/components/BenchmarkTable";

const PercentileChart = dynamic(() => import("@/components/PercentileChart"), {
	ssr: false,
});

export default function PercentileChartWrapper() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<Box
			component="section"
			ref={ref}
			sx={{
				position: "relative",
				paddingTop: { xs: 4, md: 6 },
				background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
			}}
		>
			<Container maxWidth="lg">
				<Box
					sx={{
						mb: 4,
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						alignItems: { xs: "flex-start", md: "center" },
						justifyContent: "space-between",
						gap: 2,
					}}
				>
					<Box>
						<Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
							<LineChart size={24} />
							<Typography variant="h5" sx={{ fontWeight: 700 }}>
								Plan Design Analysis
							</Typography>
						</Box>
						<Typography
							variant="body1"
							color="text.secondary"
							sx={{ maxWidth: "600px" }}
						>
							Compare your plan's key metrics against industry benchmarks,
							visualized through percentile distributions and detailed tabular
							analysis.
						</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							gap: 1.5,
							alignItems: "center",
							backgroundColor: "warning.soft",
							py: 1,
							px: 2,
							borderRadius: 2,
							border: "1px solid",
							borderColor: "warning.light",
						}}
					>
						<AlertCircle size={20} className="text-yellow-600" />
						<Typography
							variant="body2"
							sx={{
								color: "warning.dark",
								fontWeight: 500,
							}}
						>
							Sample data shown for demonstration
						</Typography>
					</Box>
				</Box>

				{/* Charts section */}
				<Grid container spacing={4}>
					<Grid item xs={12} md={6}>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<Box
								sx={{
									borderRadius: 2,
									overflow: "hidden",
									transition:
										"transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
									"&:hover": {
										transform: "translateY(-4px)",
										boxShadow: (theme) => theme.shadows[4],
									},
								}}
							>
								<BenchmarkTable />
							</Box>
						</motion.div>
					</Grid>

					<Grid item xs={12} md={6}>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ duration: 0.5, delay: 0.4 }}
						>
							<Box
								sx={{
									borderRadius: 2,
									overflow: "hidden",
									transition:
										"transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
									"&:hover": {
										transform: "translateY(-4px)",
										boxShadow: (theme) => theme.shadows[4],
									},
								}}
							>
								<PercentileChart />
							</Box>
						</motion.div>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
