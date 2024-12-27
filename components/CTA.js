// components/CTA.js

"use client";
import { Box, Typography, Button, Container } from "@mui/material";
import { ArrowRight, Receipt } from "lucide-react";

export default function CTA() {
	return (
		<Box sx={{ textAlign: "center", color: "white" }}>
			<Container maxWidth="md">
				<Typography
					variant="h3"
					gutterBottom
					sx={{
						fontSize: { xs: "2rem", sm: "2.5rem" },
						fontWeight: 700,
					}}
				>
					Ready to Transform Your Benchmarking?
				</Typography>
				<Typography
					variant="body1"
					sx={{
						marginBottom: "2rem",
						fontSize: { xs: "1rem", sm: "1.25rem" },
					}}
				>
					Request a custom report and unlock actionable insights for your
					clients today.
				</Typography>
				<Button
					variant="contained"
					color="secondary"
					href="/request-more-info?product=individual_reports"
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
					Request a Report
				</Button>

				<Button
					variant="outlined"
					color="inherit"
					startIcon={<Receipt size={20} />}
					href="/products"
					sx={{
						padding: "0.75rem 2rem",
						marginLeft: 2,
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
					See Pricing
				</Button>
			</Container>
		</Box>
	);
}
