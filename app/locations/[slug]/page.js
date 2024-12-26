// app/locations/[slug]/page.js

import { Box, Typography, Grid, Container } from "@mui/material";
import RequestSampleForm from "@/components/RequestSampleForm";
import { employerCountApi } from "@/services/benchmarkingService";
import {
  slugToAbbr,
  statesAbbrLookup,
  regionList,
} from "@/utils/locationConfig";
import PercentileChartWrapper from "@/components/PercentileChartWrapper";

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const newSlug = slugToAbbr[slug];

  // Placeholder data
  const PLACEHOLDER_EMPLOYER_COUNT = { employer_count: 10535 };

  let employerCount = PLACEHOLDER_EMPLOYER_COUNT;

  try {
    const [{ ok: countOk, ...fetchedEmployerCount }] = await Promise.all([
      employerCountApi({
        industry: [],
        state: [newSlug],
        size: [],
        other: [],
      }),
    ]);

    if (countOk) employerCount = fetchedEmployerCount;
  } catch (error) {
    console.error("Error fetching data, using placeholders:", error);
  }

  const formattedLocationName = `State of ${statesAbbrLookup[newSlug].text}`;

  function findRegionByState(regionList, state_name) {
    // Normalize the input state_name to match the format in the states array
    const normalizedStateName = state_name.replace(/_/g, " ").toLowerCase();

    for (const region of regionList) {
      for (const state of region.states) {
        // Normalize each state name in the states array for comparison
        const normalizedState = state.toLowerCase();
        if (normalizedState === normalizedStateName) {
          return region; // Return the entire region object
        }
      }
    }
    return null; // Return null if the state is not found in any region
  }

  const region = findRegionByState(regionList, slug);

  return (
    <Box sx={{ backgroundColor: "#f9f9f9", minHeight: "100vh", py: 6 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            backgroundColor: "primary.main",
            color: "white",
            py: 8,
            px: 3,
            borderRadius: 2,
            marginBottom: 4,
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 700, marginBottom: 3 }}>
            {formattedLocationName} Insights
          </Typography>
          <Container maxWidth="md">
            <Typography
              variant="body1"
              sx={{ fontSize: "1.125rem", lineHeight: 1.6 }}
            >
              Delve into the latest trends and metrics shaping the{" "}
              <strong>{formattedLocationName}</strong>. From competitive
              employer contributions to coverage rates and premiums, gain
              actionable insights to help your client or HR teams attract,
              retain, and reward top talent in an increasingly competitive
              landscape.
            </Typography>
          </Container>
        </Box>

        <Grid container spacing={4} sx={{ marginBottom: 6 }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "white",
                padding: 4,
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, marginBottom: 2 }}
              >
                Location Cohort Overview
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Our database features{" "}
                <strong>
                  {employerCount.employer_count.toLocaleString()} employers
                </strong>{" "}
                within the <strong>{formattedLocationName}</strong>, providing a
                robust foundation of insights for this geographic location. By
                applying additional state filters, you can target custom, larger
                regional areas.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Gain access to tailored benchmarking reports specific to this
                location or customized by industry and size. Leverage these
                insights to make smarter renewal recommendations for key
                employee benefits, including:
              </Typography>
              <Grid container sx={{ marginBottom: 2 }}>
                <Grid item xs={5}>
                  {[
                    "🩺 Medical",
                    "💊 Prescription Drugs",
                    "🛡️ Stop Loss",
                    "🦷 Dental",
                    "👓 Vision",
                    "💼 Life Insurance",
                    "🕒 Short Term Disability",
                    "⏳ Long Term Disability",
                  ].map((item, i) => (
                    <Typography variant="body1" color="text.secondary" key={i}>
                      <strong>{item}</strong>
                    </Typography>
                  ))}
                </Grid>
                <Grid item xs={7}>
                  {[
                    "Plan Design Analysis",
                    "Gross Premium Rates",
                    "Employee Contributions",
                    "Strategic Planning",
                    "Plan Prevalence",
                    "Voluntary Coverage",
                  ].map((item, i) => (
                    <Typography variant="body1" color="text.secondary" key={i}>
                      {item}
                    </Typography>
                  ))}
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "white",
                padding: 4,
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, marginBottom: 2 }}
              >
                Regional Classification Overview
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Bnchmrk offers the unique ability to generate benchmarking
                reports by individual states while also supporting complex
                regional analyses. You can leverage the regional classifications
                provided by the US Census Bureau or create custom regions
                tailored to your specific needs.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Below, you'll find a list of states that are standardly grouped
                with your selected state as the{" "}
                <strong>{region.region_name}</strong>, providing a starting
                point for meaningful and precise comparisons. The region
                comprises of{" "}
                <strong>{region.states.length.toLocaleString()} states</strong>:
              </Typography>
              {region.states.map((item) => (
                <Typography
                  variant="body2"
                  key={item.value}
                  color="text.secondary"
                  sx={{ paddingLeft: 1 }}
                >
                  <strong>{item}</strong>
                </Typography>
              ))}
              <Typography
                variant="body1"
                color="text.secondary"
                paragraph
                sx={{ paddingTop: 2 }}
              >
                You can customize the report to include any combination of
                states, allowing for tailored insights that align with your
                specific benchmarking needs. Alternatively, national
                benchmarking is also possible by applying an industry or size
                filter, enabling broader comparisons across a wide dataset.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <PercentileChartWrapper />

        {/* Request Form */}
        <Box
          sx={{
            marginTop: 8,
            padding: 4,
            borderRadius: 2,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            backgroundColor: "primary.main",
            color: "primary.contrastText",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              marginBottom: 4,
              textAlign: "center",
            }}
          >
            Request More Information
          </Typography>
          <Grid container spacing={4}>
            {/* Form Section */}
            <Grid item xs={12} md={6}>
              <RequestSampleForm
                defaultMessage={`I'm interested in learning more about a benchmarking report for the ${formattedLocationName}.`}
              />
            </Grid>

            {/* Additional Info Section */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 700 }}>
                  Unlock Key Insights to Elevate Your Employee Benefits
                  Expertise
                </Typography>
                <Typography variant="body1" color="primary.contrastText">
                  Are you in the employee benefits industry and looking to gain
                  a competitive edge in the state of {formattedLocationName}?
                  Bnchmrk's proprietary database empowers your teams with
                  actionable insights to support clients and drive sales
                  success.
                </Typography>
                <Typography variant="body1" color="primary.contrastText">
                  By completing this form, you'll receive a sample report
                  showcasing how our insights can enhance your consulting
                  services and help you deliver impactful solutions across all
                  client and sales teams.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
