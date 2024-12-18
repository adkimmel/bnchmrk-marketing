// app/page.js

"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import EmployerFilterGrid from "./components/EmployerFilterGrid";

export default function HomePage() {
	return (
		<>
			<Navbar />
			<div id="home">
				<Hero />
			</div>
			<div id="features">
				<Features />
			</div>
			<div id="pricing">
				<EmployerFilterGrid />
			</div>
			<div id="contact">
				<p>Contact Us</p>
			</div>
		</>
	);
}
