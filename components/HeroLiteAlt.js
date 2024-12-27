"use client";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HeroAlternate({ topText, bottomText }) {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const slideInVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <Box
      ref={ref}
      component="section"
      role="banner"
      aria-label="Hero section"
      sx={{
        position: "relative",
        minHeight: { xs: "60vh", md: "70vh" },
        display: "flex",
        alignItems: "center",
        bgcolor: "background.paper",
        overflow: "hidden",
      }}
    >
      {/* Angled background section - adjusted position and opacity */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: "-5%", // Moved slightly right
          width: "55%", // Increased width
          height: "100%",
          bgcolor: "primary.main",
          opacity: 0.9, // Added some transparency
          transform: "skewX(-12deg) translateX(20%)",
          display: { xs: "none", md: "block" },
        }}
      />

      {/* Accent lines - adjusted positions */}
      {[...Array(5)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            width: "2px",
            height: "40%",
            right: `${40 + i * 8}%`, // Adjusted positioning
            top: "30%",
            bgcolor: "primary.light",
            opacity: 0.2,
            transform: "skewX(-12deg)",
            display: { xs: "none", md: "block" },
          }}
        />
      ))}

      {/* Content - adjusted positioning and added background for text */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "55%" }, // Slightly reduced width
            pr: { xs: 2, md: 4 },
            position: "relative", // Added for absolute positioning context
          }}
        >
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInVariants}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                fontWeight: 800,
                color: "text.primary",
                mb: 4,
                lineHeight: 1.2,
                position: "relative", // For stacking context
              }}
            >
              {topText}
            </Typography>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInVariants}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1.125rem", md: "1.25rem" },
                color: "text.secondary",
                maxWidth: "90%",
                lineHeight: 1.8,
                fontWeight: 400,
                position: "relative", // For stacking context
                "& strong": {
                  // Enhanced emphasis for strong tags
                  color: "primary.main",
                  fontWeight: 600,
                },
              }}
            >
              {bottomText}
            </Typography>
          </motion.div>
        </Box>
      </Container>

      {/* Optional: Add a subtle gradient overlay for better text contrast */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, rgba(255,255,255,1) 45%, rgba(255,255,255,0) 100%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </Box>
  );
}
