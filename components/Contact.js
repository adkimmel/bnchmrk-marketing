// components/Contact.js

"use client";
import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from "@mui/material";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "1rem" }}>
          Get in Touch
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
          📧 <span style={{ paddingLeft: 5 }}>support@bnchmrk.com</span>
        </Typography>
        <Typography variant="h6">
          📞 <span style={{ paddingLeft: 5 }}>(800) 215-2916</span>
        </Typography>
      </Grid>

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
          onSubmit={handleSubmit}
        >
          <TextField
            name="name"
            label="Your Name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            InputProps={{
              sx: { backgroundColor: "white", borderRadius: "4px" },
            }}
            required
          />
          <TextField
            name="email"
            label="Your Email"
            type="email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            InputProps={{
              sx: { backgroundColor: "white", borderRadius: "4px" },
            }}
            required
          />
          <TextField
            name="message"
            label="Your Message"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={formData.message}
            onChange={handleChange}
            InputProps={{
              sx: { backgroundColor: "white", borderRadius: "4px" },
            }}
            required
          />

          {loading ? (
            <CircularProgress />
          ) : (
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{
                alignSelf: "flex-start",
                paddingX: "2rem",
              }}
            >
              Submit
            </Button>
          )}

          {success === true && (
            <Alert severity="success">Message sent successfully!</Alert>
          )}
          {success === false && (
            <Alert severity="error">
              Failed to send message. Please try again.
            </Alert>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
