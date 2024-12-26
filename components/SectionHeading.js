// components/SectionHeading.js
import { Box, Typography } from "@mui/material";

export default function SectionHeading({ topText, bodyText, color }) {
  return (
    <Box sx={{ marginBottom: { xs: "3rem", md: "4rem" }, textAlign: "center" }}>
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          fontSize: { xs: "2rem", md: "2.5rem" },
          fontWeight: 700,
          color: color || "primary.main",
          marginBottom: "1rem",
        }}
      >
        {topText}
      </Typography>
      <Typography
        variant="body1"
        color={color || "text.secondary"}
        sx={{
          fontSize: { xs: "1rem", md: "1.125rem" },
          maxWidth: "800px",
          margin: "0 auto",
          lineHeight: 1.6,
        }}
      >
        {bodyText}
      </Typography>
    </Box>
  );
}
