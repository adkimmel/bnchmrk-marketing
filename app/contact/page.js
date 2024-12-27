// app/contact/page.js

import { Box, Container, Typography } from "@mui/material";
import HeroLite from "@/components/HeroLite";
import IntroSection from "@/components/IntroSection";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Contact Employee Benefits Benchmarking | Bnchmrk",
  description:
    "Our benefits and data experts are ready to help you leverage the power of data-driven benchmarking for your organization.",
  openGraph: {
    title: "Get in Touch With Our Team | Bnchmrk",
    description:
      "Get data-driven insights for your benefits consulting firm. Contact Bnchmrk for more information about our solutions and pricing.",
    type: "website",
    url: "https://bnchmrk.com/contact",
  },
  alternates: {
    canonical: "https://bnchmrk.com/contact",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact",
  description: "Get in touch with the Bnchmrk team.",
  mainEntity: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: "English",
    areaServed: "US",
  },
  potentialAction: {
    "@type": "LeadAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://bnchmrk.com/contact",
      actionPlatform: ["http://schema.org/DesktopWebPlatform"],
    },
  },
};

// Dynamic import for form component
const Contact = dynamic(() => import("@/components/Contact"), {
  ssr: true,
});

export default async function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroLite
        topText="Let's Start the Conversation"
        bottomText="Connect with our team to discover how Bnchmrk can transform your benefits consulting practice"
      />
      <IntroSection
        title="Get in Touch With Our Team"
        subtitle="Our benefits and data experts are ready to help you leverage the power of data-driven benchmarking for your organization."
        description="When you reach out to Bnchmrk, you'll get:"
        bulletPoints={[
          "Personalized consultation with benefits technology experts who understand your business needs",
          "Live demonstration of our platform tailored to your specific use cases and requirements",
          "Detailed pricing information and licensing options customized for your organization",
          "Quick response times with dedicated support throughout your decision process",
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
            We're Here to Help
          </Typography>
          <Contact />
        </Container>
      </Box>
    </>
  );
}
