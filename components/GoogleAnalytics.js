// components/GoogleAnalytics.jsx
"use client";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function Analytics({ GA_MEASUREMENT_ID }) {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		if (process.env.NODE_ENV === "production") {
			const url = pathname + searchParams.toString();
			window.gtag("config", GA_MEASUREMENT_ID, {
				page_path: url,
			});
		}
	}, [pathname, searchParams, GA_MEASUREMENT_ID]);

	return null;
}

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }) {
	if (process.env.NODE_ENV !== "production") {
		return null;
	}

	return (
		<>
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
			/>
			<Script
				id="google-analytics"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
				}}
			/>
			<Suspense fallback={null}>
				<Analytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
			</Suspense>
		</>
	);
}
