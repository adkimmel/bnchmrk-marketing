"use client";
import {
	Box,
	Container,
	Typography,
	List,
	ListItem,
	Divider,
} from "@mui/material";
import { motion } from "framer-motion";

export default function BlogContent({ content, source }) {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.2 },
		},
	};

	const elementVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	};

	return (
		<Container maxWidth="md">
			<Box sx={{ py: 6 }}>
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					{/* Blog Content */}
					{content.map((section, index) => {
						switch (section.type) {
							case "paragraph":
								return (
									<motion.div key={index} variants={elementVariants}>
										<Typography
											variant="body1"
											sx={{
												mb: 3,
												lineHeight: 1.8,
												color: "text.secondary",
												fontSize: "1.1rem",
											}}
										>
											{section.content}
										</Typography>
									</motion.div>
								);

							case "h2":
								return (
									<motion.div key={index} variants={elementVariants}>
										<Typography
											variant="h4"
											component="h2"
											sx={{
												mt: 6,
												mb: 3,
												fontWeight: 600,
												color: "text.primary",
												position: "relative",
												"&::after": {
													content: '""',
													position: "absolute",
													bottom: -8,
													left: 0,
													width: 60,
													height: 3,
													bgcolor: "primary.main",
													opacity: 0.7,
												},
											}}
										>
											{section.content}
										</Typography>
									</motion.div>
								);

							case "list":
								return (
									<motion.div key={index} variants={elementVariants}>
										<List
											sx={{
												mb: 3,
												pl: 4,
												bgcolor: "grey.50",
												borderRadius: 1,
												boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
											}}
										>
											{section.items.map((item, i) => (
												<ListItem
													key={i}
													sx={{
														display: "list-item",
														listStyleType: "disc",
														pl: 1,
														py: 1,
													}}
												>
													<Typography
														variant="body1"
														sx={{
															lineHeight: 1.8,
															color: "text.secondary",
															fontSize: "1.1rem",
														}}
													>
														{item}
													</Typography>
												</ListItem>
											))}
										</List>
									</motion.div>
								);

							case "quote":
								return (
									<motion.div key={index} variants={elementVariants}>
										<Box
											sx={{
												borderLeft: "4px solid",
												borderColor: "primary.main",
												pl: 3,
												py: 3,
												my: 4,
												bgcolor: "grey.100",
												borderRadius: "4px",
												boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
											}}
										>
											<Typography
												variant="h6"
												sx={{
													fontStyle: "italic",
													color: "text.primary",
													lineHeight: 1.6,
												}}
											>
												{section.content}
											</Typography>
										</Box>
									</motion.div>
								);

							default:
								return null;
						}
					})}

					{/* Citation */}
					<Divider sx={{ my: 4 }} />
					{source && (
						<Box sx={{ textAlign: "center", mt: 4 }}>
							<Typography
								variant="body2"
								sx={{
									fontSize: "0.9rem",
									color: "text.secondary",
								}}
							>
								Source: Bnchmrk National Survey 2024
							</Typography>
						</Box>
					)}
				</motion.div>
			</Box>
		</Container>
	);
}
