import { Container, Paper, Typography, Box } from "@mui/material";

export default function TermsOfService(props) {
  return (
    <Box sx={{ backgroundColor: "#f9f9f9", minHeight: "100vh", paddingY: 4 }}>
      <Container maxWidth="lg">
        <Paper sx={{ p: 3 }}>
          <Box
            sx={{
              textAlign: "center",
              backgroundColor: "primary.dark",
              color: "white",
              borderRadius: 2,
              py: 8,
              px: 3,
              borderRadius: 2,
              marginBottom: 2,
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 700, marginBottom: 2 }}>
              What is Employee Benefits Benchmarking?
            </Typography>
            <Container maxWidth="md">
              <Typography
                variant="body1"
                sx={{ fontSize: "1.125rem", lineHeight: 1.6 }}
              >
                Employee benefits benchmarking is the process of evaluating the
                competitiveness of an organization's benefits programs by
                comparing those organizations in similar industries, geographic
                regions, or size tiers.
              </Typography>
            </Container>
          </Box>
          <Box sx={{ p: 4 }}>
            <Typography variant="h6" paragraph>
              Benchmarking requires gathering data on benefits offered by other
              organizations, validating the data, and running calculations to
              build a report. An organization will then collectively analyze the
              report and make changes to their benefits program at renewal time.
            </Typography>
            <Typography variant="h6" paragraph>
              This process is repeated on a regular basis to ensure that the
              benefits program remains up-to-date and effective in attracting
              and retaining employees. Many organizations integrate benchmarking
              analysis each year for the following reasons:
            </Typography>
            <Typography variant="h6" paragraph>
              <strong>Cost Comparison</strong>: Benchmarking allows you to
              compare your benefits offerings to those of similar organizations,
              which can help you identify areas where you may be overspending or
              underspending and adjust accordingly.
            </Typography>

            <Typography variant="h6" paragraph>
              <strong>Attracting & Retaining Employees</strong>: Understanding
              the benefits offered by competitors can help you stay competitive
              and attract top talent. It also allows you to ensure that your
              benefits package meets the needs and expectations of your current
              employees.
            </Typography>

            <Typography variant="h6" paragraph>
              <strong>Compliance</strong>: Keeping up with industry standards
              and regulations is important to ensure compliance with the law.
              Benchmarking can help you stay informed about changes to benefits
              laws and regulations.
            </Typography>

            <Typography variant="h6" paragraph>
              <strong>ROI</strong>: Measuring the return on investment of your
              benefits program helps you make informed decisions about the
              benefits you offer and ensures that you are getting the most value
              for your investment.
            </Typography>

            <Typography variant="h6" paragraph>
              <strong>Continuous Improvement</strong>: Regular benchmarking
              allows you to track your progress and make changes to your
              benefits program over time to ensure that it remains competitive
              and effective.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
