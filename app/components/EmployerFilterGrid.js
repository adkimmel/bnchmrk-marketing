// app/components/EmployerFilterGrid.js

"use client";
import { useEffect, useState } from "react";
import {
	Box,
	Grid,
	Typography,
	CircularProgress,
	Container,
} from "@mui/material";
import Link from "next/link";
import { employerFiltersApi } from "../services/benchmarkingService";
import CTA from "./CTA";

export default function EmployerFilterGrid() {
	const [industries, setIndustries] = useState([]);
	const [locationStates, setLocationStates] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchFilters = async () => {
			const res = await employerFiltersApi();
			const { industry, state, ok, error } = res;
			if (ok) {
				setIndustries(industry || []);
				setLocationStates(
					state.sort((a, b) => a.display_name.localeCompare(b.display_name)) ||
						[]
				);
			} else {
				console.error("Failed to fetch filters:", error);
			}
			setLoading(false);
		};

		fetchFilters();
	}, []);

	const Loading = () => {
		return (
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "150px",
				}}
			>
				<CircularProgress />
			</Box>
		);
	};

	const Heading = ({ topText, bodyText }) => {
		return (
			<Box sx={{ marginBottom: "2rem", textAlign: "center" }}>
				<Typography
					variant="h4"
					sx={{
						fontSize: { xs: "1.75rem", md: "2rem" },
						fontWeight: 700,
						color: "primary.main",
						marginBottom: "1rem",
					}}
				>
					{topText}
				</Typography>
				<Typography
					variant="body1"
					color="text.secondary"
					sx={{
						fontSize: { xs: "0.875rem", md: "1rem" },
						maxWidth: "800px",
						margin: "0 auto",
					}}
				>
					{bodyText}
				</Typography>
			</Box>
		);
	};

	const CTAbutton = ({ state }) => {
		return (
			<Box
				sx={{
					marginTop: "auto",
					display: "inline-block",
					padding: "0.5rem 1rem",
					backgroundColor: state ? "secondary.main" : "primary.main",
					color: "white",
					borderRadius: "4px",
					fontSize: "0.875rem",
					fontWeight: 500,
					textTransform: "uppercase",
					transition: "background-color 0.2s ease",
					"&:hover": {
						backgroundColor: "primary.dark",
					},
				}}
			>
				{state ? "Explore More" : "Learn More"}
			</Box>
		);
	};

	const FilterCard = ({ top, bottom, state }) => {
		return (
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					textAlign: "center",
					padding: "1rem",
					backgroundColor: "white",
					boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
					borderRadius: "8px",
					transition: "transform 0.2s ease, box-shadow 0.2s ease",
					color: "text.primary",
					height: "100%",
					"&:hover": {
						transform: "translateY(-6px)",
						boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
						color: "primary.main",
					},
				}}
			>
				<Box>
					<Typography
						variant="body1"
						sx={{
							fontWeight: 600,
							fontSize: "1rem",
							marginBottom: "0.5rem",
							color: "inherit",
						}}
					>
						{top}
					</Typography>
					{bottom && (
						<Typography
							variant="body2"
							sx={{
								fontSize: "0.875rem",
								color: "text.secondary",
								marginBottom: "0.75rem",
							}}
						>
							{bottom}
						</Typography>
					)}
				</Box>
				<CTAbutton state={state} />
			</Box>
		);
	};

	const gridStyle = {
		"--columns": { xs: "2", sm: "3", md: "4", lg: "5" },
		maxWidth: "1200px",
		margin: "0 auto",
		rowGap: "1rem",
	};

	return (
		<>
			<Box
				sx={{
					padding: { xs: "3rem 1.5rem", md: "4rem 2rem" },
					backgroundColor: "#f9f9f9",
				}}
			>
				<Container maxWidth="lg">
					<Heading
						topText="Explore Benchmarking by Industry"
						bodyText={`Explore how the industries in your book of business compare with
							others using Bnchmrk's real-time benchmarking database. With data
							spanning ${industries.length || 54} industries, our comprehensive
							dataset provides actionable insights into benefit plans, trends,
							and performance metrics. Analyze your client distribution and
							uncover the data that drives smarter decisions.`}
					/>

					{loading ? (
						<Loading />
					) : industries.length > 0 ? (
						<Grid container spacing={2} sx={gridStyle}>
							{industries.map(({ value, display_name }) => {
								let sector = null;
								let industry_name = null;

								if (display_name.includes(" - ")) {
									const [part1, part2] = display_name.split(" - ");
									sector = part1;
									industry_name = part2;
								} else {
									industry_name = display_name;
								}

								return (
									<Grid item xs={6} sm={4} md={2.4} key={value}>
										<Link
											href={`/industries/${value}`}
											style={{ textDecoration: "none", width: "100%" }}
										>
											<FilterCard top={industry_name} bottom={sector} />
										</Link>
									</Grid>
								);
							})}
						</Grid>
					) : (
						<Typography align="center" color="text.secondary" variant="body2">
							No industries available at the moment.
						</Typography>
					)}
				</Container>
			</Box>

			<CTA />

			<Box
				sx={{
					padding: { xs: "3rem 1.5rem", md: "4rem 2rem" },
					backgroundColor: "#f9f9f9",
				}}
			>
				<Container maxWidth="lg">
					<Heading
						topText="Explore Benchmarking by Location"
						bodyText="Dive into detailed benchmarking insights by state or region.
							Explore how benefit trends, plan metrics, and other key data
							points vary across all 50 states and DC."
					/>
					{loading ? (
						<Loading />
					) : locationStates.length > 0 ? (
						<Grid container spacing={2} sx={gridStyle}>
							{locationStates.map(({ value, display_name, region_name }) => (
								<Grid item xs={6} sm={4} md={2.4} key={value}>
									<Link
										href={`/states/${value}`}
										style={{ textDecoration: "none", width: "100%" }}
									>
										<FilterCard top={display_name} bottom={region_name} state />
									</Link>
								</Grid>
							))}
						</Grid>
					) : (
						<Typography align="center" color="text.secondary" variant="body2">
							No locations available at the moment.
						</Typography>
					)}
				</Container>
			</Box>
		</>
	);
}

//
// example data
//
// {
//     "state": [
//         {
//             "value": "AL",
//             "display_name": "Alabama",
//             "region_name": "Southeast Region"
//         },
//     ],
//     "industry": [
//         {
//             "value": "accommodation_food_services",
//             "display_name": "Accommodation & Food Services"
//         },
//     ],
//     "other": [
//         {
//             "value": "cbcf1aee-d8c9-4e4f-939c-c53eb9b595e2",
//             "display_name": "Book of Business"
//         },
//     ],
//     "size": [
//         {
//             "value": "size_under_100",
//             "display_name": "Under 100"
//         },
//     ],
//     "ok": true
// }
