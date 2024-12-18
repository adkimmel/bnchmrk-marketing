// app/layout.js

"use client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography } from "@mui/material";
import { theme } from "./styles/theme";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ThemeProvider theme={theme}>
					<CssBaseline /> {/* Normalize browser styles */}
					{children}
					<Box
						component="footer"
						sx={{
							textAlign: "center",
							padding: "1rem",
							backgroundColor: "#f4f6f8",
						}}
					>
						<Typography variant="body2" color="text.secondary">
							© 2024 Your Brand. All rights reserved.
						</Typography>
						<Typography variant="body2" color="text.secondary">
							<a
								href="/privacy-policy"
								style={{ textDecoration: "none", color: "inherit" }}
							>
								Privacy Policy
							</a>{" "}
							|{" "}
							<a
								href="/terms"
								style={{ textDecoration: "none", color: "inherit" }}
							>
								Terms of Use
							</a>
						</Typography>
					</Box>
				</ThemeProvider>
			</body>
		</html>
	);
}
