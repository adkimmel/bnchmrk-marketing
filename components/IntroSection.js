// components/IntroSection.js

"use client";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

export default function IntroSection({
  title,
  subtitle,
  description,
  bulletPoints = [],
  backgroundColor = "white",
  spacing = { xs: 6, md: 25 },
  gridLayout = { left: 6, right: 6 },
  titleVariant = "h3",
  subtitleVariant = "h5",
  descriptionVariant = "h6",
  bulletPointVariant = "body1",
  animationDelay = 0.4,
  animationDuration = 0.6,
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      sx={{
        py: spacing,
        backgroundColor: backgroundColor,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={gridLayout.left}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              transition={{ duration: animationDuration }}
            >
              {title && (
                <Typography
                  variant={titleVariant}
                  sx={{
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  {title}
                </Typography>
              )}
              {subtitle && (
                <Typography
                  variant={subtitleVariant}
                  sx={{
                    fontWeight: 600,
                    color: "text.secondary",
                  }}
                >
                  {subtitle}
                </Typography>
              )}
            </motion.div>
          </Grid>

          <Grid item xs={12} md={gridLayout.right}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              transition={{
                duration: animationDuration,
                delay: animationDelay,
              }}
            >
              {description && (
                <Typography
                  variant={descriptionVariant}
                  sx={{
                    fontWeight: 600,
                    mb: bulletPoints.length > 0 ? 3 : 0,
                  }}
                >
                  {description}
                </Typography>
              )}

              {bulletPoints.length > 0 && (
                <Box>
                  {bulletPoints.map((point, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        mb: index !== bulletPoints.length - 1 ? 2 : 0,
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          backgroundColor: "primary.main",
                          mt: 1,
                          mr: 2,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant={bulletPointVariant}
                        sx={{
                          color: "text.secondary",
                          fontWeight: 600,
                          lineHeight: 1.6,
                        }}
                      >
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
