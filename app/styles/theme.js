// styles/theme.js

import { createTheme } from "@mui/material/styles";

export const brand = {
	primary: { hex: "#1768AA", rgb: "23, 104, 170" }, // Deep Sky Blue
	secondary: { hex: "#F4B400", rgb: "244, 180, 0" }, // Golden Yellow
	// secondary: { hex: "#D65F00", rgb: "214, 95, 0" }, // Dark Orange
};

export const theme = createTheme({
	palette: {
		primary: { main: brand.primary.hex },
		info: { main: brand.primary.hex },
		secondary: { main: brand.secondary.hex },
		warning: { main: brand.secondary.hex },
	},
	components: {
		MuiAlert: {
			styleOverrides: {
				standardSuccess: {
					backgroundColor: brand.secondary.hex,
					color: "white",
				},
				standardSuccessIcon: {
					color: "white",
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 2,
				},
			},
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1250,
			xl: 1536,
		},
	},
	typography: {
		fontFamily: "'Roboto', Arial, sans-serif",
		h1: { fontSize: "2rem", fontWeight: 500 },
		h2: { fontSize: "1.75rem", fontWeight: 500 },
		body1: { fontSize: "1rem", lineHeight: 1.5 },
	},
});
