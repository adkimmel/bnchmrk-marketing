// app/products/page.js

import { Box, Container, Typography } from "@mui/material";
import HeroLite from "@/components/HeroLite";
import IntroSection from "@/components/IntroSection";
import ProductsPricing from "@/components/ProductsPricing";

export default async function ProductsPage() {
  return (
    <>
      <HeroLite
        topText="Simple Pricing, Powerful Platform"
        bottomText="Choose the plan that fits your needs with transparent pricing and flexible options for organizations of any size"
      />
      <IntroSection
        title="Flexible Solutions for Every Organization"
        subtitle="Whether you're an independent consultant or a large firm, Bnchmrk offers scalable pricing plans designed to grow with your business needs."
        description="Our transparent pricing model delivers enterprise-grade benchmarking capabilities with benefits that matter:"
        bulletPoints={[
          "All-inclusive access to our comprehensive benefits database with no hidden costs or per-report fees",
          "Flexible licensing options that scale from individual users to enterprise-wide deployment",
          "Free onboarding and training to ensure your team maximizes the platform's value from day one",
        ]}
      />
      <Box
        sx={{
          backgroundColor: "#F4F6F8",
          py: { xs: "4rem", md: "6rem" },
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: { xs: 4, md: 6 },
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              fontWeight: 700,
            }}
          >
            Solutions That Scale With Your Success
          </Typography>
          <ProductsPricing />
        </Container>
      </Box>
    </>
  );
}
