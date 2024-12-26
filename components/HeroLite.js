// components/HeroLite.js

"use client";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { brand } from "@/styles/theme";

export default function HeroLite({ topText, bottomText }) {
  const highlightColor = brand.primary.hex;

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
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: { xs: "60vh", md: "75vh" },
        overflow: "hidden",
        backgroundColor: "primary.main",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          background: `radial-gradient(circle at center, ${highlightColor}15 0%, transparent 70%)`,
          zIndex: 0,
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
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
              marginBottom: 3,
              color: "white",
            }}
          >
            {topText}
          </Typography>
        </motion.div>
        <Container maxWidth="md">
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
              }}
            >
              {bottomText}
            </Typography>
          </motion.div>
        </Container>
      </Container>
    </Box>
  );
}
