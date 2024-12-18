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
import Logo from "./Logo";

export default function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const navItems = [
		"Home",
		"Features",
		"Analytics",
		"Explore",
		"Products",
		"Contact",
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
						{navItems.map((item) => (
							<Button
								key={item}
								href={`#${item.toLowerCase()}`}
								sx={{
									color: "white",
									margin: "0 0.5rem",
									textTransform: "none",
									fontWeight: 500,
								}}
							>
								{item}
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
						{navItems.map((item) => (
							<ListItem
								key={item}
								onClick={handleDrawerToggle}
								component="a"
								href={`#${item.toLowerCase()}`}
							>
								<ListItemText primary={item} sx={{ textAlign: "center" }} />
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
		</>
	);
}
