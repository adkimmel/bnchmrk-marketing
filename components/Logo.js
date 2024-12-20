// components/Logo.js

"use client";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

export default function Logo() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        pl: 0.5,
      }}
    >
      {/* SVG Logo */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "28px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 120 100"
          width="28"
          height="28"
        >
          <g>
            {/* Smallest Bar (Lighter Golden Yellow) */}
            <rect x="10" y="50" width="12" height="30" fill="#FFE082" />
            {/* Second Smallest Bar (Regular Golden Yellow) */}
            <rect x="30" y="40" width="12" height="40" fill="#F4B400" />
            {/* Second Tallest Bar (Regular Golden Yellow) */}
            <rect x="50" y="30" width="12" height="50" fill="#F4B400" />
            {/* Tallest Bar (Darker Golden Yellow) */}
            <rect x="70" y="20" width="12" height="60" fill="#C68A00" />
            {/* X-Axis */}
            <line
              x1="0"
              y1="80"
              x2="100"
              y2="80"
              stroke="gray"
              strokeWidth="1"
            />
          </g>
        </svg>
      </Box>

      {/* Logo Text */}
      <Typography
        variant="h6"
        noWrap
        component={Link}
        href="/"
        sx={{
          fontWeight: 600,
          color: "white",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          height: "24px", // Align with logo height
        }}
      >
        Bnchmrk
      </Typography>
    </Box>
  );
}
