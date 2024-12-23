// components/RequestSampleForm.js

"use client";
import { useState } from "react";
import { Box, TextField, Button, Alert, CircularProgress } from "@mui/material";

export default function Contact({ defaultMessage }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: defaultMessage,
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
        setFormData({ name: "", email: "", company: "", message: "" });
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

  const slotProps = {
    input: {
      sx: {
        color: "black",
        backgroundColor: "white",
      },
    },
    label: {
      sx: {
        color: "primary.contrastText",
      },
    },
  };

  return (
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
        slotProps={slotProps}
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
        slotProps={slotProps}
        required
      />
      <TextField
        name="company"
        label="Your Company"
        variant="outlined"
        fullWidth
        value={formData.company}
        onChange={handleChange}
        slotProps={slotProps}
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
        slotProps={slotProps}
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
          Submit Request
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
  );
}
