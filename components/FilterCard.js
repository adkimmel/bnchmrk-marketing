// components/FilterCard.js

"use client";
import { Box, Typography } from "@mui/material";

export default function FilterCard({ top, bottom, state }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center",
        padding: "1rem",
        backgroundColor: "white",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        color: "text.primary",
        height: "100%",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
          color: "primary.main",
        },
      }}
    >
      <Box>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,
            fontSize: "1rem",
            marginBottom: "0.5rem",
            color: "inherit",
          }}
        >
          {top}
        </Typography>
        {bottom && (
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.875rem",
              color: "text.secondary",
              marginBottom: "0.75rem",
            }}
          >
            {bottom}
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          marginTop: "auto",
          display: "inline-block",
          padding: "0.5rem 1rem",
          backgroundColor: state ? "secondary.main" : "primary.main",
          color: "white",
          borderRadius: "4px",
          fontSize: "0.875rem",
          fontWeight: 500,
          textTransform: "uppercase",
          transition: "background-color 0.2s ease",
          "&:hover": {
            backgroundColor: state ? "secondary.dark" : "primary.dark",
          },
        }}
      >
        {state ? "Explore More" : "Learn More"}
      </Box>
    </Box>
  );
}
