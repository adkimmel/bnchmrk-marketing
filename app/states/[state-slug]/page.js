// components/states/[state-slug]/page.js

"use client";
import { useParams } from "next/navigation";
import { Box, Typography, Button } from "@mui/material";

export default function StatePage() {
	const { "state-slug": stateSlug } = useParams();

	return (
		<Box sx={{ padding: "4rem 2rem" }}>
			<Typography variant="h2" gutterBottom>
				{stateSlug.replace("-", " ")} Insights
			</Typography>
			<Typography variant="body1" color="text.secondary" gutterBottom>
				Explore benchmarking data for the {stateSlug.replace("-", " ")} state.
			</Typography>
			<Button variant="contained" color="primary">
				Request a Custom Report
			</Button>
		</Box>
	);
}
