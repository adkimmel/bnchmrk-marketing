// app/industries/[slug]/page.js

import {
	Box,
	Typography,
	Grid,
	Container,
	TextField,
	Button,
} from "@mui/material";
import StyledTextField from "@/components/StyledTextField";
import { employerCountApi, getNaicsApi } from "@/services/benchmarkingService";

export default async function IndustryPage({ params }) {
	const { slug } = await params;

	// Placeholder data
	const PLACEHOLDER_EMPLOYER_COUNT = { employer_count: 10535 };
	const PLACEHOLDER_NAICS = [];

	let employerCount = PLACEHOLDER_EMPLOYER_COUNT;
	let naics = PLACEHOLDER_NAICS;

	try {
		const [
			{ ok: countOk, ...fetchedEmployerCount },
			{ ok: naicsOk, list: fetchedNaics },
		] = await Promise.all([
			employerCountApi({
				industry: [slug],
				state: [],
				size: [],
				other: [],
			}),
			getNaicsApi(),
		]);

		if (countOk) employerCount = fetchedEmployerCount;
		if (naicsOk) naics = fetchedNaics;
	} catch (error) {
		console.error("Error fetching data, using placeholders:", error);
	}

	const formattedIndustryName = slug
		.split("_")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");

	const filteredNaics = naics.filter(
		(item) => item.industry.short_name === slug
	);

	return (
		<Box sx={{ backgroundColor: "#f9f9f9", minHeight: "100vh", py: 6 }}>
			<Container maxWidth="lg">
				<Box
					sx={{
						textAlign: "center",
						backgroundColor: "primary.main",
						color: "white",
						py: 8,
						px: 3,
						borderRadius: 2,
						marginBottom: 4,
					}}
				>
					<Typography variant="h3" sx={{ fontWeight: 700, marginBottom: 3 }}>
						{formattedIndustryName} Insights
					</Typography>
					<Container maxWidth="md">
						<Typography
							variant="body1"
							sx={{ fontSize: "1.125rem", lineHeight: 1.6 }}
						>
							Delve into the latest trends and metrics shaping the{" "}
							<strong>{formattedIndustryName}</strong> industry. From
							competitive employer contributions to coverage rates and premiums,
							gain actionable insights to help your client or HR teams attract,
							retain, and reward top talent in an increasingly competitive
							landscape.
						</Typography>
					</Container>
				</Box>

				<Grid container spacing={4} sx={{ marginBottom: 6 }}>
					<Grid item xs={12} md={6}>
						<Box
							sx={{
								backgroundColor: "white",
								padding: 4,
								borderRadius: 2,
								boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
							}}
						>
							<Typography
								variant="h5"
								sx={{ fontWeight: 700, marginBottom: 2 }}
							>
								Industry Cohort Overview
							</Typography>
							<Typography variant="body1" color="text.secondary" paragraph>
								Our database features{" "}
								<strong>
									{employerCount.employer_count.toLocaleString()} employers
								</strong>{" "}
								within the <strong>{formattedIndustryName}</strong> industry,
								providing a robust foundation of insights for this sector. By
								applying additional filters for location or organization size,
								you can further refine and explore this valuable data.
							</Typography>
							<Typography variant="body1" color="text.secondary" paragraph>
								Gain access to tailored benchmarking reports specific to this
								industry or customized by location and size. Leverage these
								insights to make smarter renewal recommendations for key
								employee benefits, including:
							</Typography>
							<Grid container sx={{ marginBottom: 2 }}>
								<Grid item xs={5}>
									{[
										"🩺 Medical",
										"💊 Prescription Drugs",
										"🛡️ Stop Loss",
										"🦷 Dental",
										"👓 Vision",
										"💼 Life Insurance",
										"🕒 Short Term Disability",
										"⏳ Long Term Disability",
									].map((item, i) => (
										<Typography variant="body1" color="text.secondary" key={i}>
											<strong>{item}</strong>
										</Typography>
									))}
								</Grid>
								<Grid item xs={7}>
									{[
										"Plan Design Analysis",
										"Gross Premium Rates",
										"Employee Contributions",
										"Strategic Planning",
										"Plan Prevalence",
										"Voluntary Coverage",
									].map((item, i) => (
										<Typography variant="body1" color="text.secondary" key={i}>
											{item}
										</Typography>
									))}
								</Grid>
							</Grid>
						</Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<Box
							sx={{
								backgroundColor: "white",
								padding: 4,
								borderRadius: 2,
								boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
							}}
						>
							<Typography
								variant="h5"
								sx={{ fontWeight: 700, marginBottom: 2 }}
							>
								Industry Classification Overview
							</Typography>
							<Typography variant="body1" color="text.secondary" paragraph>
								Bnchmrk leverages the North American Industry Classification
								System (NAICS) for its benchmarking classifications. NAICS
								offers a modern, standardized framework for grouping businesses,
								ensuring precise and meaningful comparisons. Unlike the outdated
								SIC system, which was last updated in 1987, NAICS reflects
								today’s industries and is regularly revised to stay current with
								economic changes.
							</Typography>
							<Typography variant="body1" color="text.secondary" paragraph>
								The <strong>{formattedIndustryName}</strong> industry comprises
								of{" "}
								<strong>
									{filteredNaics.length.toLocaleString()} NAICS codes
								</strong>
								:
							</Typography>
							{filteredNaics.map((item) => (
								<Typography
									variant="body2"
									key={item.value}
									color="text.secondary"
									sx={{ paddingLeft: 1 }}
								>
									<strong>{item.display_name.split(" - ")[1]}</strong> (
									{item.display_name.split(" - ")[0]})
								</Typography>
							))}
						</Box>
					</Grid>
				</Grid>

				{/* Request Form */}
				<Box
					sx={{
						marginTop: 8,
						padding: 4,
						borderRadius: 2,
						boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
						backgroundColor: "primary.light",
						color: "primary.contrastText",
					}}
				>
					<Typography
						variant="h5"
						sx={{
							fontWeight: 700,
							marginBottom: 4,
							textAlign: "center",
						}}
					>
						Request More Information
					</Typography>
					<Grid container spacing={4}>
						{/* Form Section */}
						<Grid item xs={12} md={6}>
							<Box
								component="form"
								sx={{
									display: "flex",
									flexDirection: "column",
									gap: 2,
									maxWidth: "100%",
								}}
							>
								<StyledTextField
									label="Your Name"
									slotProps={{
										input: { sx: { backgroundColor: "white" } },
									}}
									required
								/>
								<StyledTextField
									label="Your Email"
									slotProps={{
										input: { sx: { backgroundColor: "white" } },
									}}
									type="email"
									required
								/>
								<StyledTextField
									label="Your Company"
									slotProps={{
										input: { sx: { backgroundColor: "white" } },
									}}
									type="email"
									required
								/>
								<StyledTextField
									label="Your Message"
									multiline
									rows={4}
									slotProps={{
										input: { sx: { backgroundColor: "white", color: "black" } },
									}}
									required
									defaultValue={`I'm interested in learning more about a benchmarking report for the ${formattedIndustryName} industry.`}
								/>
								<Button variant="contained" color="primary" type="submit">
									Submit Request
								</Button>
							</Box>
						</Grid>

						{/* Additional Info Section */}
						<Grid item xs={12} md={6}>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									gap: 2,
								}}
							>
								<Typography variant="body1" sx={{ fontWeight: 700 }}>
									Unlock Key Insights to Elevate Your Consulting Services
								</Typography>
								<Typography variant="body1" color="primary.contrastText">
									Are you an employee benefits consultant looking to gain a
									competitive edge in the {formattedIndustryName} industry?
									Bnchmrk's institutional benchmarking data empowers your
									consulting teams with actionable insights to support clients
									and drive sales success.
								</Typography>

								<Typography variant="body1" color="primary.contrastText">
									By completing this form, you'll gain access to a detailed
									report designed to enhance your consulting services and
									deliver impactful solutions across all client and sales teams.
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
}
