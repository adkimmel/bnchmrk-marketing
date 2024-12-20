// components/ProductsPricing.js

"use client";
import { Box, Grid, Typography, Button } from "@mui/material";

const products = [
  {
    name: "Individual Report",
    price: "$349 per report",
    features: [
      "No annual contract required.",
      "Single Report",
      "Single Employer",
      "Single User",
    ],
    color: "primary.light",
  },
  {
    name: "Essentials License",
    price: "$10,950 per year",
    features: [
      "Annual contract is required.",
      "Unlimited Reporting",
      "1,000 Employers",
      "25 Users",
      "Book of Business Reporting",
    ],
    color: "primary.main",
  },
  {
    name: "Advanced License",
    price: "$19,250 per year",
    features: [
      "Annual contract is required.",
      "Unlimited Reporting",
      "5,000 Employers",
      "100 Users",
      "Book of Business Reporting",
      "Custom Filters",
    ],
    color: "secondary.main",
  },
  {
    name: "Enterprise License",
    price: "$34,500 per year",
    features: [
      "Annual contract is required.",
      "Unlimited Reporting",
      "Unlimited Employers",
      "250 Users",
      "Book of Business Reporting",
      "Custom Filters",
      "API Access",
    ],
    color: "secondary.dark",
  },
];

export default function ProductsPricing() {
  return (
    <Grid container spacing={4}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Box
            sx={{
              backgroundColor: product.color,
              color: "white",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, fontSize: "1.25rem", mb: "1rem" }}
            >
              {product.name}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                fontSize: "1.5rem",
                mb: "1rem",
              }}
            >
              {product.price}
            </Typography>
            <Box>
              {product.features.map((feature, featureIndex) => (
                <Typography
                  key={featureIndex}
                  variant="body2"
                  sx={{
                    color: "rgba(255, 255, 255, 0.85)",
                    mb: "0.5rem",
                  }}
                >
                  {feature}
                </Typography>
              ))}
            </Box>
            <Button
              variant="contained"
              color="inherit"
              sx={{
                backgroundColor: "white",
                color: product.color,
                mt: "2rem",
                textTransform: "uppercase",
                fontWeight: 700,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
