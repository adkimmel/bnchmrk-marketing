// components/Logo.js
"use client";
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
          height: "22px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 99 80"
          width="28"
          height="22"
        >
          <g>
            {Array.from({ length: 9 }, (_, i) => {
              const barCount = 10;
              const totalWidth = 100;
              const barWidth = totalWidth / (barCount * 1.1);
              const gap = barWidth * 0.1;
              const x = i * (barWidth + gap);
              const height = Math.pow(1.5, i) * 3;
              const y = 70 - height;
              const color = i < 3 ? "#FFE082" : i < 6 ? "#F4B400" : "#C68A00";
              return (
                <rect
                  key={i}
                  x={x}
                  y={y}
                  width={barWidth}
                  height={height}
                  fill={color}
                />
              );
            })}
          </g>
        </svg>
      </Box>

      {/* Logo Text */}
      <Typography
        variant="h6"
        noWrap
        sx={{
          fontWeight: 600,
          color: "white",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          ml: 0.5,
        }}
      >
        Bnchmrk
      </Typography>
    </Box>
  );
}
