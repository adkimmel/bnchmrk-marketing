// app/components/Contact.js

"use client";
import {
	Box,
	Grid,
	Typography,
	TextField,
	Button,
	Container,
} from "@mui/material";

export default function Contact() {
	return (
		<Box
			id="contact"
			sx={{
				backgroundColor: "primary.light",
				color: "white",
				paddingY: { xs: "3rem", md: "6rem" },
			}}
		>
			<Container maxWidth="lg">
				<Typography
					variant="h4"
					align="center"
					sx={{
						fontWeight: 700,
						marginBottom: "1.5rem",
						color: "white",
						fontSize: { xs: "2rem", md: "2.5rem" },
					}}
				>
					Contact Us
				</Typography>
				<Typography
					variant="body1"
					align="center"
					color="white"
					sx={{
						marginBottom: "3rem",
						fontSize: { xs: "1rem", md: "1.125rem" },
						maxWidth: "800px",
						margin: "0 auto",
					}}
				>
					Have questions? Need help? Our team is here to assist you with all
					your benchmarking needs. Feel free to reach out via the form below or
					by using the provided contact information.
				</Typography>

				<Grid container spacing={4}>
					{/* Contact Information */}
					<Grid item xs={12} md={6}>
						<Typography
							variant="h6"
							sx={{ fontWeight: 600, marginBottom: "1rem" }}
						>
							Get in Touch
						</Typography>
						<Typography variant="body1" sx={{ marginBottom: "1rem" }}>
							📞 Phone: (123) 456-7890
						</Typography>
						<Typography variant="body1" sx={{ marginBottom: "1rem" }}>
							📧 Email: support@bnchmrk.com
						</Typography>
						<Typography variant="body1">
							📍 Address: 123 Benchmark Blvd, Data City, USA
						</Typography>
					</Grid>

					{/* Contact Form */}
					<Grid item xs={12} md={6}>
						<Typography
							variant="h6"
							sx={{ fontWeight: 600, marginBottom: "1rem" }}
						>
							Send Us a Message
						</Typography>
						<Box
							component="form"
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: "1rem",
							}}
						>
							<TextField
								label="Your Name"
								variant="outlined"
								fullWidth
								InputProps={{
									sx: { backgroundColor: "white", borderRadius: "4px" },
								}}
							/>
							<TextField
								label="Your Email"
								type="email"
								variant="outlined"
								fullWidth
								InputProps={{
									sx: { backgroundColor: "white", borderRadius: "4px" },
								}}
							/>
							<TextField
								label="Your Message"
								multiline
								rows={4}
								variant="outlined"
								fullWidth
								InputProps={{
									sx: { backgroundColor: "white", borderRadius: "4px" },
								}}
							/>
							<Button
								variant="contained"
								color="secondary"
								sx={{
									alignSelf: "flex-start",
									paddingX: "2rem",
								}}
							>
								Submit
							</Button>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
