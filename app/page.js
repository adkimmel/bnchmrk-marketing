// app/page.js

"use client";
import { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AnalyticsOverview from "@/components/AnalyticsOverview";
import ExploreIndustry from "@/components/ExploreIndustry";
import CTA from "@/components/CTA";
import ExploreLocation from "@/components/ExploreLocation";
import ProductsPricing from "@/components/ProductsPricing";
import Contact from "@/components/Contact";
import {
  employerFiltersApi,
  employerCountApi,
  getTotalPlans,
} from "@/services/benchmarkingService";

export default function HomePage() {
  const EMPLOYER_COUNT = { employer_count: 10535 };
  const PLAN_COUNTS = { plans: 62019 };

  const [employerCount, setEmployerCount] = useState(EMPLOYER_COUNT);
  const [counts, setCounts] = useState(PLAN_COUNTS);
  const [industries, setIndustries] = useState([]);
  const [locationStates, setLocationStates] = useState([]);

  useEffect(() => {
    const fetchEmployerCount = async () => {
      const { ok, error, ...rest } = await employerCountApi({
        industry: [],
        state: [],
        size: [],
        other: [],
      });

      if (ok) {
        setEmployerCount(rest || EMPLOYER_COUNT);
      } else {
        console.error("Failed to fetch employer count:", error);
      }
    };

    const fetchPlanCounts = async () => {
      const { ok, error, ...rest } = await getTotalPlans();

      if (ok) {
        setCounts(rest || PLAN_COUNTS);
      } else {
        console.error("Failed to fetch plan counts:", error);
      }
    };

    const fetchFilters = async () => {
      const { industry, state, ok, error } = await employerFiltersApi();

      if (ok) {
        setIndustries(industry || []);
        setLocationStates(
          state.sort((a, b) => a.display_name.localeCompare(b.display_name)) ||
            []
        );
      } else {
        console.error("Failed to fetch filters:", error);
      }
    };

    fetchEmployerCount();
    fetchPlanCounts();
    fetchFilters();
  }, []);

  const totalPlanCount = Object.values(counts).reduce(
    (acc, val) => acc + val,
    0
  );

  const Heading = ({ topText, bodyText, color }) => (
    <Box sx={{ marginBottom: { xs: "3rem", md: "4rem" }, textAlign: "center" }}>
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          fontSize: { xs: "2rem", md: "2.5rem" },
          fontWeight: 700,
          color: color ? color : "primary.main",
          marginBottom: "1rem",
        }}
      >
        {topText}
      </Typography>
      <Typography
        variant="body1"
        color={color ? color : "text.secondary"}
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

  return (
    <>
      {/* TOP HERO SECTION     */}
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
        }}
      >
        <Hero />
      </Box>

      {/* FEATURES SECTION */}
      <Box
        id="features"
        sx={{
          backgroundColor: "#F4F6F8",
          py: { xs: "4rem", md: "6rem" },
        }}
      >
        <Container maxWidth="lg">
          <Heading topText="Why Choose Us?" />
          <Features />
        </Container>
      </Box>

      {/* ANALYTICS SECTION */}
      <Box
        id="analytics"
        sx={{
          backgroundColor: "white",
          py: { xs: "4rem", md: "6rem" },
        }}
      >
        <Container maxWidth="lg">
          <Heading
            topText="Benchmarking with Confidence"
            bodyText={`Empower your decision-making with confidence, supported by sound
            methodology and reliable insights. The Bnchmrk app provides access to a
            comprehensive dataset of ${employerCount.employer_count.toLocaleString()} employers and${" "}
            ${totalPlanCount.toLocaleString()} benefit plans. Leverage
            advanced technology and proprietary tools to revolutionize employee
            benefits benchmarking and uncover actionable strategies with ease.`}
          />
          <AnalyticsOverview />
        </Container>
      </Box>

      {/* INDUSTRY EXPLORE SECTION */}
      <Box
        id="explore"
        sx={{
          backgroundColor: "#f9f9f9",
          py: { xs: "4rem", md: "6rem" },
        }}
      >
        <Container maxWidth="lg">
          <Heading
            topText="Explore Benchmarking by Industry"
            bodyText={`Explore how the industries in your book of business compare with
							others using Bnchmrk's real-time benchmarking database. With data
							spanning ${industries.length || 54} industries, our comprehensive
							dataset provides actionable insights into benefit plans, trends,
							and performance metrics. Analyze your client distribution and
							uncover the data that drives smarter decisions.`}
          />
          <ExploreIndustry industries={industries} />
        </Container>
      </Box>

      {/* CALL TO ACTION SECTION */}
      <Box
        id="call-to-action"
        sx={{
          backgroundColor: "primary.main",
          py: { xs: "4rem", md: "6rem" },
        }}
      >
        <CTA />
      </Box>

      {/* LOCATION EXPLORE SECTION */}
      <Box
        id="explore-location"
        sx={{
          backgroundColor: "#f9f9f9",
          py: { xs: "4rem", md: "6rem" },
        }}
      >
        <Container maxWidth="lg">
          <Heading
            topText="Explore Benchmarking by Location"
            bodyText="Dive into detailed benchmarking insights by state or region.
							Explore how benefit trends, plan metrics, and other key data
							points vary across all 50 states and DC."
          />
          <ExploreLocation locations={locationStates} />
        </Container>
      </Box>

      {/* PRODUCTS & PRICING SECTION */}
      <Box
        id="products"
        sx={{
          backgroundColor: "#f4f6f8",
          py: { xs: "4rem", md: "6rem" },
        }}
      >
        <Container maxWidth="lg">
          <Heading
            topText="Products & Pricing"
            bodyText="Whether your employee benefit benchmarking needs are large or small,
              we've got the right product for you. Single reports are ideal for
              first-time users looking to kick the tires, while annual licenses are
              designed for firms looking to integrate benchmarking across their
              account management and sales teams."
          />
          <ProductsPricing />
        </Container>
      </Box>

      {/* CONTACT SECTION */}
      <Box
        id="contact"
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          py: { xs: "4rem", md: "6rem" },
        }}
      >
        <Container maxWidth="lg">
          <Heading
            topText="Contact Us"
            bodyText="Have questions? Need help? Our team is here to assist you with all
          your benchmarking needs. Feel free to reach out via the form below or
          by using the provided contact information."
            color="white"
          />
          <Contact />
        </Container>
      </Box>
    </>
  );
}
