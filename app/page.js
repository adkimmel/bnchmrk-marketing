// app/page.js

"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AnalyticsOverview from "./components/AnalyticsOverview";
import EmployerFilterGrid from "./components/EmployerFilterGrid";
import ProductsPricing from "./components/ProductsPricing";
import Contact from "./components/Contact";

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
			<div id="analytics">
				<AnalyticsOverview />
			</div>
			<div id="explore">
				<EmployerFilterGrid />
			</div>
			<div id="products">
				<ProductsPricing />
			</div>
			<div id="contact">
				<Contact />
			</div>
		</>
	);
}
