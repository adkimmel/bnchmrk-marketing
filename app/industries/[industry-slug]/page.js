// components/industries/[industry-slug]/page.js

"use client";
import { useParams } from "next/navigation";
import { Box, Typography, Button } from "@mui/material";

export default function IndustryPage() {
	const { "industry-slug": industrySlug } = useParams();

	return (
		<Box sx={{ padding: "4rem 2rem" }}>
			<Typography variant="h2" gutterBottom>
				{industrySlug.replace("-", " ")} Insights
			</Typography>
			<Typography variant="body1" color="text.secondary" gutterBottom>
				Explore benchmarking data for the {industrySlug.replace("-", " ")}{" "}
				industry.
			</Typography>
			<Button variant="contained" color="primary">
				Request a Custom Report
			</Button>
		</Box>
	);
}
