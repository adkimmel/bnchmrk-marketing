// app/layout.js
import LayoutWrapper from "@/components/LayoutWrapper";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "../styles/globals.css";

export const viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
};

export const metadata = {
	title: {
		default: "Bnchmrk - Employee Benefits Benchmarking Platform",
		template: "%s | Bnchmrk",
	},
	description:
		"Access real-time employee benefits benchmarking data and analytics for informed decision-making.",
	keywords: [
		"benefits benchmarking",
		"employee benefits",
		"benefits analysis",
		"HR analytics",
		"compensation data",
		"benefits data",
	],
	openGraph: {
		title: "Bnchmrk - Employee Benefits Benchmarking Platform",
		description:
			"Access real-time employee benefits benchmarking data and analytics.",
		url: "https://bnchmrk.com",
		siteName: "Bnchmrk",
		type: "website",
		locale: "en_US",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<GoogleAnalytics GA_MEASUREMENT_ID={process.env.GA_MEASUREMENT_ID} />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
			</head>
			<body>
				<LayoutWrapper>{children}</LayoutWrapper>
			</body>
		</html>
	);
}
