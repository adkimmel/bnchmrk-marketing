// components/Navbar.js

"use client";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { title: "Home", link: "/" },
    { title: "Features", link: "#features" },
    { title: "Analytics", link: "#analytics" },
    { title: "Explore", link: "#explore" },
    { title: "Products", link: "#products" },
    { title: "Contact", link: "#contact" },
  ];

  return (
    <>
      {/* AppBar */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "primary.main", color: "white" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Logo />

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(({ title, link }) => (
              <Button
                key={title}
                href={link}
                sx={{
                  color: "white",
                  margin: "0 0.5rem",
                  textTransform: "none",
                  fontWeight: 500,
                }}
              >
                {title}
              </Button>
            ))}
          </Box>

          {/* Mobile Navigation Toggle */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: "250px",
            backgroundColor: "primary.main",
            color: "white",
          },
        }}
      >
        <Box sx={{ padding: "1rem" }}>
          <List>
            {navItems.map(({ title, link }) => (
              <ListItem
                key={title}
                onClick={handleDrawerToggle}
                component="a"
                href={link}
              >
                <ListItemText primary={title} sx={{ textAlign: "center" }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
