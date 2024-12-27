// components/RequestForm.js

"use client";
import { useState } from "react";
import {
	Box,
	Typography,
	TextField,
	Button,
	CircularProgress,
	Alert,
} from "@mui/material";
import { useSearchParams } from "next/navigation";

export default function RequestForm({ header, formText }) {
	const searchParams = useSearchParams();
	const product = searchParams.get("product");
	const defaultMessage = product
		? `I'm interested in learning more about ${
				product.includes("license") ? "the unlimited " : ""
		  }${product.replace("_", " ")}.`
		: "";

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		message: defaultMessage,
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
					type: header,
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
			<Typography variant="h6" sx={{ fontWeight: 700, color: "primary.main" }}>
				{formText}
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
				<Alert severity="success">Request submitted successfully!</Alert>
			)}

			{success === false && (
				<Alert severity="error">
					Failed to submit request. Please try again.
				</Alert>
			)}
		</Box>
	);
}
