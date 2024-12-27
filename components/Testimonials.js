// components/Testimonials.js

"use client";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
	return (
		<Swiper
			modules={[Navigation, Pagination, Autoplay]}
			navigation
			pagination={{ clickable: true }}
			autoplay={{ delay: 12500 }}
			slidesPerView={1}
			centeredSlides
			style={{
				background: "linear-gradient(135deg, #FFFFFF, #F4F6F8)",
				boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
				borderRadius: "8px",
				padding: "2rem",
				minHeight: "100%",
			}}
		>
			{[
				{
					quote:
						"Bnchmrk’s reports gave us the leverage we needed to close a major deal. The data was precise and presented in a way that impressed even the most analytical decision-makers. It’s a game-changer for a sales-driven organization like ours.",
					title: "VP Business Development",
					firm: "Regional Consulting Agency",
				},
				{
					quote:
						"The Bnchmrk insights have completely transformed how we serve our clients. With clear, actionable data, we’ve been able to recommend strategies that align with their goals and exceed expectations. This tool has strengthened our reputation as a national leader in benefits consulting.",
					title: "Client Services Team Lead",
					firm: "National Benefits Consulting Firm",
				},
				{
					quote:
						"The depth and accuracy of Bnchmrk’s data provided our team with a clear edge during renewal season. We’ve used it to identify opportunities for cost savings and optimize benefit plans with confidence. As a smaller firm, having this level of insight sets us apart from regional competitors.",
					title: "Senior Financial Analyst",
					firm: "Boutique Consulting Firm",
				},
			].map(({ quote, title, firm }) => (
				<SwiperSlide key={firm}>
					<Box
						sx={{
							paddingX: 6,
							paddingTop: { xs: 3, md: 10 },
							textAlign: "center",
						}}
					>
						<Typography
							variant="subtitle1"
							sx={{
								fontSize: "1.1rem",
								fontStyle: "italic",
								marginBottom: "1rem",
								fontWeight: 400,
							}}
						>
							{quote}
						</Typography>
						<Typography
							variant="subtitle2"
							sx={{ fontWeight: 600, color: "primary.main" }}
						>
							{title}
						</Typography>
						<Typography
							variant="subtitle2"
							sx={{
								fontSize: "0.7rem",
								color: "#555",
							}}
						>
							{firm}
						</Typography>
					</Box>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
