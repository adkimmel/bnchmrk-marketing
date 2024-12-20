// components/Features.js

"use client";
import { Box, Grid, Typography, Container } from "@mui/material";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import VerifiedIcon from "@mui/icons-material/Verified";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import HandshakeIcon from "@mui/icons-material/Handshake";

const features = [
  {
    icon: <DataUsageIcon sx={{ fontSize: "3rem" }} />,
    title: "Real-Time Data",
    description:
      "Leverage continually updated data from proprietary surveys and partnerships with benefit consultants.",
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: "3rem" }} />,
    title: "Pinpoint Accuracy",
    description:
      "Bnchmrk's proprietary software validates data at the point of entry to deliver precise benchmarking results.",
  },
  {
    icon: <BrandingWatermarkIcon sx={{ fontSize: "3rem" }} />,
    title: "Custom Branding",
    description:
      "Add your company’s branding to seamlessly integrate benchmarking reports into your consulting model.",
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: "3rem" }} />,
    title: "Dedicated Support",
    description:
      "Work with a team of data scientists and benefit analysts who are committed to your success.",
  },
  {
    icon: <MonetizationOnIcon sx={{ fontSize: "3rem" }} />,
    title: "Cost-Effective Solution",
    description:
      "Get the most practical and competitive benchmarking solution with minimal data entry requirements.",
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: "3rem" }} />,
    title: "No Conflict of Interest",
    description:
      "We work as an extension of your consulting team—not as a competitor or insurance carrier.",
  },
];

export default function Features() {
  return (
    <Grid container spacing={4}>
      {features.map((feature, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Box
            sx={{
              textAlign: "center",
              padding: "3rem",
              backgroundColor: "white",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <Box
              sx={{
                fontSize: "4rem",
                color: "primary.main",
              }}
            >
              {feature.icon}
            </Box>
            <Typography variant="h5" gutterBottom>
              {feature.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {feature.description}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
