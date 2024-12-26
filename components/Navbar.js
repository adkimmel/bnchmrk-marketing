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
import LoginIcon from "@mui/icons-material/Login";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    {
      title: "Home",
      link: "/",
      description: "Employee benefits benchmarking platform home",
    },
    {
      title: "Features",
      link: "/features",
      description: "Explore Bnchmrk's benefits analysis features",
    },
    {
      title: "Products",
      link: "/products",
      description: "Employee benefits benchmarking products and pricing",
    },
    {
      title: "Explore Data",
      link: "/explore-data",
      description: "Browse benefits data by industry and region",
    },
    {
      title: "Contact",
      link: "/contact",
      description: "Get in touch with our benefits experts",
    },
  ];

  const isActive = (path) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav role="navigation" aria-label="Main navigation">
      <AppBar
        position="static"
        component="div"
        sx={{ backgroundColor: "primary.main", color: "white" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link href="/" passHref legacyBehavior>
            <a
              aria-label="Return to homepage"
              style={{ textDecoration: "none" }}
            >
              <Logo />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <Box
            component="nav"
            sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
            aria-label="Desktop navigation"
          >
            {navItems.map(({ title, link, description }) => (
              <Link key={title} href={link} passHref legacyBehavior>
                <Button
                  component="a"
                  aria-label={description}
                  aria-current={isActive(link) ? "page" : undefined}
                  sx={{
                    color: "white",
                    margin: "0 0.5rem",
                    textTransform: "none",
                    fontWeight: 500,
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "6px",
                      left: "50%",
                      transform: isActive(link)
                        ? "translateX(-50%) scaleX(1)"
                        : "translateX(-50%) scaleX(0)",
                      transformOrigin: "center",
                      width: "80%",
                      height: "2px",
                      backgroundColor: "white",
                      transition: "transform 0.3s ease",
                    },
                    "&:hover::after": {
                      transform: "translateX(-50%) scaleX(1)",
                    },
                  }}
                >
                  {title}
                </Button>
              </Link>
            ))}

            <a
              href="https://app.bnchmrk.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Login to Bnchmrk platform (opens in new tab)"
            >
              <Button
                startIcon={<LoginIcon />}
                variant="contained"
                color="secondary"
                sx={{
                  borderRadius: 1,
                  color: "white",
                  marginLeft: "0.5rem",
                  textTransform: "none",
                }}
              >
                Login
              </Button>
            </a>
          </Box>

          {/* Mobile Navigation Controls */}
          <Box sx={{ display: { sm: "none" } }}>
            <a
              href="https://app.bnchmrk.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Login to Bnchmrk platform (opens in new tab)"
            >
              <Button
                startIcon={<LoginIcon />}
                variant="outlined"
                size="small"
                sx={{
                  color: "white",
                  borderColor: "white",
                  marginRight: "1rem",
                  textTransform: "none",
                  fontWeight: 500,
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                Login
              </Button>
            </a>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleDrawerToggle}
              aria-label="Open mobile menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        aria-label="Mobile navigation menu"
        id="mobile-navigation"
        sx={{
          "& .MuiDrawer-paper": {
            width: "250px",
            backgroundColor: "primary.main",
            color: "white",
          },
        }}
      >
        <Box
          component="nav"
          sx={{ padding: "1rem" }}
          aria-label="Mobile navigation"
        >
          <List>
            {navItems.map(({ title, link, description }) => (
              <Link key={title} href={link} passHref legacyBehavior>
                <ListItem
                  component="a"
                  onClick={handleDrawerToggle}
                  aria-label={description}
                  aria-current={isActive(link) ? "page" : undefined}
                  sx={{
                    backgroundColor: isActive(link)
                      ? "rgba(255, 255, 255, 0.1)"
                      : "transparent",
                    borderRadius: "4px",
                    mb: 1,
                  }}
                >
                  <ListItemText
                    primary={title}
                    sx={{
                      textAlign: "center",
                      "& .MuiTypography-root": {
                        fontWeight: isActive(link) ? 600 : 400,
                      },
                    }}
                  />
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
}
