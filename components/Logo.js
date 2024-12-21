// components/Logo.js

"use client";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

export default function Logo() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				pl: 0.5,
			}}
		>
			{/* SVG Logo */}
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					height: "22px", // Shorter height
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 99 80" // Shorter viewBox height
					width="28"
					height="22" // Matches the shorter height
				>
					<g>
						{/* Bars representing half of a bell curve */}
						{Array.from({ length: 9 }, (_, i) => {
							const barCount = 10; // Number of bars
							const totalWidth = 100; // Total width of the bars
							const barWidth = totalWidth / (barCount * 1.1); // Adjust bar width based on total space
							const gap = barWidth * 0.1; // Gap as a fraction of bar width
							const x = i * (barWidth + gap); // X position of each bar
							const height = Math.pow(1.5, i) * 3; // Reduced height scaling
							const y = 70 - height; // Adjusted Y position for the shorter SVG
							const color = i < 3 ? "#FFE082" : i < 6 ? "#F4B400" : "#C68A00"; // Gradient colors
							return (
								<rect
									key={i}
									x={x}
									y={y}
									width={barWidth}
									height={height}
									fill={color}
								/>
							);
						})}
					</g>
				</svg>
			</Box>

			{/* Logo Text */}
			<Typography
				variant="h6"
				noWrap
				component={Link}
				href="/"
				sx={{
					fontWeight: 600,
					color: "white",
					textDecoration: "none",
					display: "flex",
					alignItems: "center",
					ml: 0.5, // Reduced margin for less space
				}}
			>
				Bnchmrk
			</Typography>
		</Box>
	);
}
