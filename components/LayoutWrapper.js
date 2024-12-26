// components/LayoutWrapper.js

"use client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { theme } from "../styles/theme";
import Navbar from "@/components/Navbar";

export default function LayoutWrapper({ children }) {
  const currentYear = new Date().getFullYear();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Box
        component="main"
        sx={{ minHeight: "calc(100vh - 150px)" }}
        role="main"
        aria-label="Main content"
      >
        {children}
      </Box>
      <Box
        component="footer"
        sx={{
          textAlign: "center",
          padding: "1rem",
          backgroundColor: "#f4f6f8",
          borderTop: "1px solid #e0e0e0",
        }}
        role="contentinfo"
      >
        <Typography variant="body2" color="text.secondary">
          © {currentYear} Bnchmrk LLC. All rights reserved.
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            "& a": {
              color: "inherit",
              textDecoration: "none",
              transition: "color 0.2s",
              "&:hover": {
                color: "primary.main",
              },
            },
          }}
        >
          <Link href="/privacy-policy">Privacy Policy</Link>
          {" | "}
          <Link href="/terms-of-service">Terms of Service</Link>
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
