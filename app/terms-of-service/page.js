import { Container, Paper, Typography, Box } from "@mui/material";

export default function TermsOfService(props) {
  const doc = [
    {
      title: "License and Platform Use",
      content: (
        <Typography paragraph>
          Bnchmrk grants you a limited, non-transferable, non-exclusive license
          to access and use the Bnchmrk platform solely for purposes directly
          related to your company’s internal business needs. This license does
          not permit resale, redistribution, or public display of any Bnchmrk
          data, content, or software.
        </Typography>
      ),
    },
    {
      title: "Ownership and Intellectual Property",
      content: (
        <Typography paragraph>
          Bnchmrk owns all rights, title, and interest in and to the platform,
          including all software, data, content, and methodologies. This
          includes proprietary algorithms, benchmarking data, and related
          intellectual property. Unauthorized use of Bnchmrk’s intellectual
          property is strictly prohibited.
        </Typography>
      ),
    },
    {
      title: "Confidentiality and Data Handling",
      content: (
        <>
          <Typography paragraph>
            <strong>User Responsibilities:</strong> You are responsible for
            maintaining the confidentiality of any data accessed on the
            platform. Any data you export (e.g., benchmarking results) must be
            handled securely and used solely within your company’s operations.
          </Typography>
          <Typography paragraph>
            <strong>Prohibited Actions:</strong> Sharing or disclosing Bnchmrk
            data outside your organization or accessing restricted data without
            authorization is not permitted.
          </Typography>
        </>
      ),
    },
    {
      title: "Compliance with Corporate Agreement",
      content: (
        <Typography paragraph>
          As an individual user, you are expected to adhere to the provisions of
          your company’s Corporate Agreement with Bnchmrk. Failure to comply
          with these Terms or the Corporate Agreement may result in immediate
          suspension of your access to the platform.
        </Typography>
      ),
    },
    {
      title: "Admin Responsibilities",
      content: (
        <Typography paragraph>
          Company administrators or supervisors are responsible for monitoring
          platform use, managing and updating user access, and ensuring
          compliance within their team.
        </Typography>
      ),
    },
    {
      title: "Behavioral Restrictions",
      content: (
        <>
          <Typography paragraph>
            To maintain the integrity and security of the platform, users agree
            not to engage in unauthorized sharing, misuse of data, or the use of
            third-party software to interact with the platform. Use of the
            platform for unlawful purposes is also strictly prohibited.
          </Typography>
        </>
      ),
    },
    {
      title: "Consequences of Violation",
      content: (
        <Typography paragraph>
          Violation of these Terms may result in account suspension, reporting
          of violations to company admins, and potential legal action.
        </Typography>
      ),
    },
    {
      title: "Disclaimers and Limitation of Liability",
      content: (
        <Typography paragraph>
          The Bnchmrk platform and all data are provided "as is." Bnchmrk
          disclaims all warranties and limits liability to the amount paid by
          your company for platform access. Bnchmrk is not liable for indirect
          or consequential damages.
        </Typography>
      ),
    },
    {
      title: "Modifications to Terms",
      content: (
        <Typography paragraph>
          Bnchmrk reserves the right to update these Terms as necessary.
          Material changes will be communicated to users, and continued use
          after modifications will constitute acceptance.
        </Typography>
      ),
    },
    {
      title: "Governing Law and Jurisdiction",
      content: (
        <Typography paragraph>
          These Terms are governed by the laws of the State of New Jersey. Any
          legal action related to these Terms or platform use will be brought
          exclusively in the federal or state courts located in New Jersey.
        </Typography>
      ),
    },
    {
      title: "Contact Information",
      content: (
        <>
          <Typography paragraph>
            For questions or concerns about these Terms, please contact us at:
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
              Terms of Service
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
