// app/request-sample-report/page.js

"use client";
import {
	Box,
	Typography,
	TextField,
	Button,
	Container,
	Grid,
	CircularProgress,
	Alert,
} from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
	{
		quote:
			"Bnchmrk’s reports gave us the leverage we needed to close a major deal. The data was precise and presented in a way that impressed even the most analytical decision-makers. It’s a game-changer for a sales-driven organization like ours.",
		title: "VP Business Development",
		firm: "Regional Consulting Agency",
	},
	{
		quote:
			"The benchmarking insights have completely transformed how we serve our clients. With clear, actionable data, we’ve been able to recommend strategies that align with their goals and exceed expectations. This tool has strengthened our reputation as a national leader in benefits consulting.",
		title: "Client Services Team Lead",
		firm: "National Benefits Consulting Firm",
	},
	{
		quote:
			"The depth and accuracy of Bnchmrk’s data provided our team with a clear edge during renewal season. We’ve used it to identify opportunities for cost savings and optimize benefit plans with confidence. As a smaller firm, having this level of insight sets us apart from regional competitors.",
		title: "Senior Financial Analyst",
		firm: "Boutique Consulting Firm",
	},
];

export default function RequestSampleReport() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setSuccess(null);

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					...formData,
					type: "Sample Report Request",
				}),
			});

			if (response.ok) {
				setSuccess(true);
				setFormData({ name: "", email: "", company: "", message: "" });
			} else {
				setSuccess(false);
			}
		} catch (error) {
			console.error("Error submitting form:", error);
			setSuccess(false);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Box sx={{ backgroundColor: "#f9f9f9", minHeight: "100vh", paddingY: 4 }}>
			<Container maxWidth="lg">
				<Box
					sx={{
						textAlign: "center",
						paddingY: 4,
						backgroundColor: "primary.dark",
						color: "white",
						borderRadius: 2,
						marginBottom: 4,
					}}
				>
					<Typography variant="h3" sx={{ fontWeight: 700, marginBottom: 2 }}>
						Request a Sample Report
					</Typography>
					<Typography variant="body1" sx={{ fontSize: "1.125rem" }}>
						See how Bnchmrk’s powerful benchmarking capabilities can work for
						you.
					</Typography>
				</Box>

				<Grid container spacing={6} alignItems="stretch">
					<Grid item xs={12} md={6}>
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
							{testimonials.map(({ quote, title, firm }) => (
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
					</Grid>
					<Grid item xs={12} md={6}>
						<Box
							sx={{
								backgroundColor: "white",
								boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
								borderRadius: 2,
								padding: 4,
								display: "flex",
								flexDirection: "column",
								gap: 2,
							}}
							component="form"
							onSubmit={handleSubmit}
						>
							<Typography
								variant="h6"
								sx={{ fontWeight: 700, color: "primary.main" }}
							>
								Get Your Sample Report
							</Typography>
							<TextField
								name="name"
								label="Your Name"
								variant="outlined"
								fullWidth
								required
								value={formData.name}
								onChange={handleChange}
							/>
							<TextField
								name="email"
								label="Email Address"
								type="email"
								variant="outlined"
								fullWidth
								required
								value={formData.email}
								onChange={handleChange}
							/>
							<TextField
								name="company"
								label="Company Name"
								variant="outlined"
								fullWidth
								required
								value={formData.company}
								onChange={handleChange}
							/>
							<TextField
								name="message"
								label="Comments or Questions"
								variant="outlined"
								fullWidth
								multiline
								rows={4}
								value={formData.message}
								onChange={handleChange}
							/>
							{loading ? (
								<CircularProgress />
							) : (
								<Button variant="contained" color="primary" type="submit">
									Submit Request
								</Button>
							)}
							{success === true && (
								<Alert severity="success">
									Request submitted successfully!
								</Alert>
							)}
							{success === false && (
								<Alert severity="error">
									Failed to submit request. Please try again.
								</Alert>
							)}
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
