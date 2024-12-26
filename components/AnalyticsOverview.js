// components/AnalyticsOverview.js

"use client";
import { Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Big Data, the Backbone of Robust Reporting",
    description:
      "Bnchmrk is a platform that leverages advanced technology and proprietary tools to deliver a data-driven approach to employee benefits benchmarking. Unlike traditional methods constrained by limited datasets or processing power, Bnchmrk empowers licensed users to analyze extensive benefit plan data instantly, uncovering patterns, trends, and insights that smaller datasets often fail to reveal.",
  },
  {
    title: "Benefit Plan Sourcing, in Real-Time",
    description:
      "Effective, timely sourcing of benefit plan information is key to delivering quality analytics. Bnchmrk analytics are built on a broad network of benefit consultants and employers who provide current data on the plans they manage or sponsor, collected through our National Data Survey. Data can be entered directly via our user-friendly platform or seamlessly transferred from CRMs and account management systems. Once validated, this information becomes part of our proprietary dataset, enabling real-time reporting that users can trust.",
  },
  {
    title: "Quality Assurance Using Rigorous Data Validation",
    description:
      "Trust in the underlying dataset is critical for accurate benchmarking analytics. Bnchmrk employs a rigorous, multi-stage validation process to ensure every employer and plan record meets the highest standards. Using dynamic form rules tailored to each benefit and plan type, the system provides immediate feedback if any data point fails to meet requirements. Unlike third-party or public data sources, Bnchmrk accepts only data that passes these stringent quality checks, ensuring reliable metrics and actionable insights for our users.",
  },
  {
    title: "Empowering Decisions with Objective Insights",
    description:
      "With access to a robust, independently validated dataset, users can make objective, data-driven decisions about their benefit plans. Bnchmrk’s approach combines a trusted database with tools to define specific cohorts, enabling employers to benchmark their offerings, identify gaps, and align strategies with organizational goals and competitive demands.",
  },
];

export default function AnalyticsOverview() {
  return (
    <Grid container spacing={3}>
      {sections.map((section, index) => (
        <Grid item xs={12} key={index}>
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Grid
              container
              sx={{
                backgroundColor:
                  index % 2 === 0 ? "primary.main" : "primary.dark",
                padding: { xs: 3, sm: 4 },
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
                },
                "&:not(:last-of-type)": {
                  marginBottom: 3,
                },
              }}
            >
              <Grid item xs={12} sm={5} md={4}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: "white",
                    marginBottom: { xs: 2, sm: 0 },
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                    lineHeight: 1.4,
                  }}
                >
                  {section.title}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={7} md={8}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "white",
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    opacity: 0.9,
                    lineHeight: 1.8,
                    paddingLeft: { sm: 3 },
                  }}
                >
                  {section.description}
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}
