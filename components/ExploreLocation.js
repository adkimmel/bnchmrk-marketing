// components/ExploreLocation.js

"use client";
import { Grid } from "@mui/material";
import Link from "next/link";
import FilterCard from "@/components/FilterCard";

export default function ExploreLocation({ locations }) {
  const gridStyle = {
    "--columns": { xs: "2", sm: "3", md: "4", lg: "5" },
    maxWidth: "1200px",
    margin: "0 auto",
    rowGap: "1rem",
  };

  return (
    <Grid container spacing={2} sx={gridStyle}>
      {locations.map(({ value, display_name, region_name }) => (
        <Grid item xs={6} sm={4} md={2.4} key={value}>
          <Link
            href={`/locations/${value}`}
            style={{ textDecoration: "none", width: "100%" }}
          >
            <FilterCard top={display_name} bottom={region_name} state />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
