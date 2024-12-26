// components/CTA.js

"use client";
import { Box, Typography, Button, Container } from "@mui/material";

export default function CTA() {
  return (
    <Box sx={{ textAlign: "center", color: "white" }}>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem" },
            fontWeight: 700,
          }}
        >
          Ready to Transform Your Benchmarking?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: "2rem",
            fontSize: { xs: "1rem", sm: "1.25rem" },
          }}
        >
          Request a custom report and unlock actionable insights for your
          clients today.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          href="/request-more-info?product=individual_reports"
          sx={{
            padding: "0.75rem 1.5rem",
            marginRight: "1rem",
          }}
        >
          Request a Report
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          href="#products"
          sx={{
            padding: "0.75rem 1.5rem",
          }}
        >
          See Pricing
        </Button>
      </Container>
    </Box>
  );
}
