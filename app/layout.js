// app/layout.js

"use client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography } from "@mui/material";
import { theme } from "../styles/theme";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Box component="main" sx={{ minHeight: "calc(100vh - 150px)" }}>
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
          >
            <Typography variant="body2" color="text.secondary">
              © {currentYear} Bnchmrk LLC. All rights reserved.
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
                href="/terms-of-service"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Terms of Service
              </a>
            </Typography>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
