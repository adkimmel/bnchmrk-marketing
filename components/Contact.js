// components/Contact.js

"use client";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";

export default function Contact() {
  return (
    <Grid container>
      {/* Contact Information */}
      <Grid item xs={12} md={6}>
        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "1rem" }}>
          Get in Touch
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
          📧 Email: support@bnchmrk.com
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
          📞 Phone: (123) 456-7890
        </Typography>
      </Grid>

      {/* Contact Form */}
      <Grid item xs={12} md={6}>
        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "1rem" }}>
          Send Us a Message
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            InputProps={{
              sx: { backgroundColor: "white", borderRadius: "4px" },
            }}
          />
          <TextField
            label="Your Email"
            type="email"
            variant="outlined"
            fullWidth
            InputProps={{
              sx: { backgroundColor: "white", borderRadius: "4px" },
            }}
          />
          <TextField
            label="Your Message"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            InputProps={{
              sx: { backgroundColor: "white", borderRadius: "4px" },
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{
              alignSelf: "flex-start",
              paddingX: "2rem",
            }}
          >
            Submit
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
