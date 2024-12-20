// app/request-sample-report/page.js

"use client";
import { Box, Typography, TextField, Button, Container } from "@mui/material";

export default function RequestSampleReport() {
  return (
    <Box
      sx={{
        padding: "4rem 2rem",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            marginBottom: "1.5rem",
            color: "primary.main",
          }}
        >
          Request a Sample Report
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{
            marginBottom: "2rem",
            fontSize: { xs: "1rem", md: "1.125rem" },
          }}
        >
          Fill out the form below to receive a sample report showcasing our
          powerful benchmarking capabilities.
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <TextField label="Your Name" variant="outlined" fullWidth required />
          <TextField
            label="Email Address"
            type="email"
            variant="outlined"
            fullWidth
            required
          />
          <TextField label="Company Name" variant="outlined" fullWidth />
          <TextField
            label="Comments or Questions"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              padding: "0.75rem 1.5rem",
              textTransform: "none",
              fontWeight: 600,
              marginTop: "1rem",
            }}
          >
            Submit Request
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
