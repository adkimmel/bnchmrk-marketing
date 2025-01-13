"use client";
import { Box, Container, Typography, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function HeroBlog({
	title,
	subtitle,
	publishDate,
	readTime,
	author = {
		name: "Bnchmrk Team",
		avatar: "/team-avatar.jpg",
	},
}) {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const contentVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: "easeOut" },
		},
	};

	return (
		<Box
			ref={ref}
			component="section"
			sx={{
				position: "relative",
				minHeight: "70vh",
				display: "flex",
				alignItems: "center",
				bgcolor: "primary.dark",
				color: "white",
				overflow: "hidden",
				pt: { xs: 8, md: 12 },
				pb: { xs: 6, md: 8 },
			}}
		>
			<Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
				<motion.div
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
					variants={contentVariants}
				>
					{/* Category & Metadata */}
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 2,
							mb: 3,
						}}
					>
						<Typography
							component="span"
							sx={{
								bgcolor: "secondary.main",
								color: "white",
								px: 1.5,
								py: 0.5,
								borderRadius: "4px",
								fontSize: "0.875rem",
								fontWeight: 500,
							}}
						>
							Employee Benefits
						</Typography>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 0.5,
								color: "white",
							}}
						>
							<AccessTimeIcon sx={{ fontSize: "1rem" }} />
							<Typography variant="body2">{readTime}</Typography>
						</Box>
					</Box>

					{/* Title & Subtitle */}
					<Typography
						variant="h1"
						sx={{
							fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
							fontWeight: 800,
							mb: 3,
							lineHeight: 1.2,
						}}
					>
						{title}
					</Typography>

					<Typography
						variant="h2"
						sx={{
							fontSize: { xs: "1.25rem", md: "1.5rem" },
							color: "rgba(255, 255, 255, 0.85)",
							fontWeight: 400,
							mb: 4,
							maxWidth: "90%",
							lineHeight: 1.6,
						}}
					>
						{subtitle}
					</Typography>

					{/* Author & Date */}
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 2,
							mt: 6,
							pb: 2,
							borderBottom: "1px solid",
							borderColor: "rgba(255, 255, 255, 0.3)",
						}}
					>
						<Avatar
							src={author.avatar}
							alt={author.name}
							sx={{ width: 48, height: 48 }}
						/>
						<Box>
							<Typography
								variant="subtitle1"
								sx={{ fontWeight: 600, color: "white" }}
							>
								{author.name}
							</Typography>
							<Typography
								variant="body2"
								sx={{ color: "rgba(255, 255, 255, 0.7)" }}
							>
								{publishDate}
							</Typography>
						</Box>
					</Box>
				</motion.div>
			</Container>
		</Box>
	);
}
