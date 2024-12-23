// components/PercentileChartWrapper.js

"use client";
import dynamic from "next/dynamic";
import { Grid, Paper, Typography } from "@mui/material";
import BenchmarkTable from "@/components/BenchmarkTable";

// Dynamically import PercentileChart without SSR
const PercentileChart = dynamic(() => import("@/components/PercentileChart"), {
  ssr: false,
});

export default function PercentileChartWrapper() {
  return (
    <Grid container spacing={4} sx={{ marginBottom: 6 }}>
      <Grid item xs={12}>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          Note: The following table and chart display sample data for
          demonstration purposes only.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ borderRadius: 2, overflow: "hidden" }}>
          <BenchmarkTable />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ borderRadius: 2, overflow: "hidden" }}>
          <PercentileChart />
        </Paper>
      </Grid>
    </Grid>
  );
}
