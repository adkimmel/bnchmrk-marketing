"use client";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HeroLite({ topText, bottomText }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Box
      ref={ref}
      component="section"
      role="banner"
      aria-label="Hero Lite section"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: { xs: "60vh", md: "75vh" },
        overflow: "hidden",
        backgroundColor: "primary.dark",
      }}
    >
      {/* Background gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Top Text */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUpVariants}
        >
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
              fontWeight: 700,
              background:
                "linear-gradient(45deg, #fff 30%, rgba(255,255,255,0.8) 90%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1.5rem",
            }}
          >
            {topText}
          </Typography>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            ...fadeUpVariants,
            visible: {
              ...fadeUpVariants.visible,
              transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              marginBottom: "2rem",
              fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.5rem" },
              fontWeight: 400,
              lineHeight: 1.6,
              color: "#FAF9F6",
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            {bottomText}
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}
