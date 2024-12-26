// app/explore-data/page.js

import { Box, Container, Typography } from "@mui/material";
import HeroLite from "@/components/HeroLite";
import IntroSection from "@/components/IntroSection";
import ExploreIndustry from "@/components/ExploreIndustry";
import ExploreLocation from "@/components/ExploreLocation";
import { employerFiltersApi } from "@/services/benchmarkingService";

export default async function FeaturesPage() {
  // Placeholder data
  const PLACEHOLDER_INDUSTRIES = [];
  const PLACEHOLDER_STATES = [];

  let industries = PLACEHOLDER_INDUSTRIES;
  let locationStates = PLACEHOLDER_STATES;

  try {
    const [filters] = await Promise.all([employerFiltersApi()]);

    if (filters?.ok) {
      industries = filters.industry || [];
      locationStates =
        filters.state?.sort((a, b) =>
          a.display_name.localeCompare(b.display_name)
        ) || [];
    }
  } catch (error) {
    console.error("Error fetching data, using placeholders:", error);
  }

  return (
    <>
      <HeroLite
        topText="Explore Benefits Data By Industry & Location"
        bottomText="Access detailed benchmarking insights across industries, states, or employer size to make informed decisions for your clients"
      />
      <IntroSection
        title="Comprehensive Benefits Data at Your Fingertips"
        subtitle="Navigate through our extensive database of employee benefits information, organized by industry sectors and geographic regions across the United States."
        description="Our segmented data approach helps you deliver more value to your clients through:"
        bulletPoints={[
          "Industry-specific benchmarking data that reflects the unique benefits landscape of each sector, from healthcare to manufacturing",
          "State-by-state analysis showing regional trends and variations in employee benefits offerings",
          "National benchmarking data filtered by industry or employee count, to match your client's profile",
          "Cross-industry comparisons to identify broader market trends and emerging benefit strategies",
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
            Dive Into Location-Based Benefits Benchmarking Data
          </Typography>
          <ExploreLocation locations={locationStates} />
        </Container>
      </Box>

      {/* ANALYTICS SECTION */}
      <Box sx={{ backgroundColor: "white", py: { xs: "4rem", md: "6rem" } }}>
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
            Powerful Industry Benefits Benchmarking Data at Scale
          </Typography>
          <ExploreIndustry industries={industries} />
        </Container>
      </Box>
    </>
  );
}
