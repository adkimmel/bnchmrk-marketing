// components/Hero.js

"use client";
import { Box, Typography, Button, Container } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: { xs: "60vh", md: "75vh" },
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
            fontWeight: 700,
          }}
        >
          Unlock Market Insights Like Never Before
        </Typography>
        <Typography
          variant="h6"
          sx={{
            marginBottom: "2rem",
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            fontWeight: 400,
          }}
        >
          The most comprehensive, data-driven benchmarking platform for the
          employee benefits industry.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            href="/request-sample-report"
            sx={{
              padding: "0.75rem 1.5rem",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            Request a Sample Report
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              padding: "0.75rem 1.5rem",
              transition: "transform 0.3s ease",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.15)",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            See How it Works
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
