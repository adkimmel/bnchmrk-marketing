import { Container, Paper, Typography, Box } from "@mui/material";

export default function PrivacyPolicy(props) {
  const doc = [
    {
      title: "Information We Collect",
      content: (
        <>
          <Typography paragraph>
            <strong>Data on Employers and Benefit Plans:</strong> Bnchmrk
            collects information on employers, including company URL, number of
            employees, industry classification, and locations. We also gather
            details about the benefit plans offered by employers, such as plan
            design, employee contributions, and premium rates.
          </Typography>
          <Typography paragraph>
            <strong>User Contact Information:</strong> For account creation and
            communication purposes, we collect basic contact information from
            users (e.g., username and email address). No additional demographic
            or personal information is collected.
          </Typography>
        </>
      ),
    },
    {
      title: "Voluntarily Shared Information",
      content: (
        <Typography paragraph>
          During registration, users provide only standard fields such as
          username, password, and company details. We do not integrate with
          social networking sites for data sharing or registration.
        </Typography>
      ),
    },
    {
      title: "Automatic Data Collection",
      content: (
        <>
          <Typography paragraph>
            We use cookies and Google Analytics to collect certain information
            automatically:
          </Typography>
          <Typography paragraph>
            <strong>Cookies:</strong> Employed to save benchmarking filter
            settings in the app, providing a smoother user experience by
            retaining user preferences across sessions.
          </Typography>
          <Typography paragraph>
            <strong>Google Analytics:</strong> Used for tracking general app
            usage, such as visit frequency, page views, and user navigation
            paths, to help us improve the Platform.
          </Typography>
        </>
      ),
    },
    {
      title: "Use of Information",
      content: (
        <Typography paragraph>
          The data collected is used exclusively for benchmarking and reporting
          purposes within the Bnchmrk platform. We do not use this data for any
          other purpose, including marketing or third-party advertising.
        </Typography>
      ),
    },
    {
      title: "Data Sharing",
      content: (
        <Typography paragraph>
          We do not share or disclose any data collected on the Platform with
          third parties, affiliates, or external entities.
        </Typography>
      ),
    },
    {
      title: "Security Measures",
      content: (
        <>
          <Typography paragraph>
            We are committed to protecting your data. Our security protocols
            include:
          </Typography>
          <Typography component="ul" sx={{ pl: 4 }} paragraph>
            <li>
              Data Encryption: Ensuring data is encrypted both in transit and at
              rest.
            </li>
            <li>
              Secure Servers: Hosting data on secure servers with restricted
              access.
            </li>
            <li>
              Access Controls: Limiting data access to authorized personnel
              only.
            </li>
          </Typography>
          <Typography paragraph>
            Despite our high-security standards, please note that no method of
            electronic storage or transmission over the Internet is completely
            secure.
          </Typography>
        </>
      ),
    },
    {
      title: "User Rights and Choices",
      content: (
        <>
          <Typography paragraph>
            <strong>Access and Updates:</strong> Users may access and update
            their information within the Platform at any time.
          </Typography>
          <Typography paragraph>
            <strong>Soft Deletes:</strong> Any deletion requests will be
            processed as soft deletes, meaning data is archived rather than
            permanently removed.
          </Typography>
          <Typography paragraph>
            <strong>Compliance with Regional Regulations:</strong> We respect
            regional regulations such as the GDPR and CCPA where applicable, to
            provide data rights to users based on their location.
          </Typography>
        </>
      ),
    },
    {
      title: "Data Retention",
      content: (
        <Typography paragraph>
          User, employer, and plan data are retained for 12 months following
          account termination. This period allows for potential reactivation or
          access to historical data, after which data may be archived or
          permanently deleted according to our data management protocols.
        </Typography>
      ),
    },
    {
      title: "Privacy for Minors",
      content: (
        <Typography paragraph>
          Our Platform is intended for users who are 18 years of age or older.
          We do not knowingly collect data from individuals under 18.
        </Typography>
      ),
    },
    {
      title: "Changes to This Privacy Policy",
      content: (
        <Typography paragraph>
          This Privacy Policy is effective as of November 8, 2024, and will
          remain in effect except for any modifications in its provisions, which
          will be effective immediately upon posting on this page. We reserve
          the right to update or change our Privacy Policy at any time, and
          users will be notified of material changes either via email or a
          prominent notice on the Platform.
        </Typography>
      ),
    },
    {
      title: "Contact Us",
      content: (
        <>
          <Typography paragraph>
            If you have questions or concerns about this Privacy Policy, please
            contact us at:
          </Typography>
          <Typography component="ul" sx={{ pl: 4 }} paragraph>
            <li>
              Email:{" "}
              <a href="mailto:support@bnchmrk.com">support@bnchmrk.com</a>
            </li>
            <li>Phone: (800) 215-2916 x1</li>
          </Typography>
        </>
      ),
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#f9f9f9", minHeight: "100vh", paddingY: 4 }}>
      <Container maxWidth="lg">
        <Paper sx={{ p: 3 }}>
          <Box
            sx={{
              textAlign: "center",
              paddingY: 4,
              backgroundColor: "primary.dark",
              color: "white",
              borderRadius: 2,
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              Privacy Policy
            </Typography>
            <Container maxWidth="md">
              <Typography variant="body1">
                Last Updated: November 8, 2024
              </Typography>
            </Container>
          </Box>

          <Box sx={{ px: 4 }}>
            {doc.map((section, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  pt: 4,
                  pb: 4,
                }}
              >
                <Typography variant="h6" sx={{ pr: 2 }}>
                  {index + 1}.
                </Typography>
                <Box
                  sx={{
                    borderBottom: "1px solid #E0E0E0",
                    pb: 1,
                    width: "100%",
                  }}
                >
                  <Typography variant="h6" paragraph>
                    {section.title}
                  </Typography>
                  {section.content}
                </Box>
              </Box>
            ))}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
