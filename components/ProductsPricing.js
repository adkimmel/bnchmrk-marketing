// components/ProductsPricing.js

"use client";
import { Box, Grid, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const products = [
  {
    name: "Individual Report",
    param: "individual_reports",
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
    param: "essentials_license",
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
    param: "advanced_license",
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
    param: "enterprise_license",
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
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
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
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: "rgba(255, 255, 255, 0.2)",
                    transform: "scaleX(0)",
                    transformOrigin: "0 50%",
                    transition: "transform 0.3s ease",
                  },
                  "&:hover::before": {
                    transform: "scaleX(1)",
                  },
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: "1.25rem",
                      mb: "1rem",
                    }}
                  >
                    {product.name}
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
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
                </motion.div>

                <Box sx={{ mb: "auto" }}>
                  {product.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.1 + featureIndex * 0.1 + 0.4,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(255, 255, 255, 0.85)",
                          mb: "0.5rem",
                          display: "flex",
                          alignItems: "center",
                          "&::before": {
                            content: '"•"',
                            marginRight: "8px",
                            color: "rgba(255, 255, 255, 0.6)",
                          },
                        }}
                      >
                        {feature}
                      </Typography>
                    </motion.div>
                  ))}
                </Box>

                <motion.div
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    variant="contained"
                    color="inherit"
                    href={`/request-more-info?product=${product.param}`}
                    sx={{
                      backgroundColor: "white",
                      color: product.color,
                      mt: "2rem",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      width: "100%",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                      },
                    }}
                  >
                    Get Started
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
}
