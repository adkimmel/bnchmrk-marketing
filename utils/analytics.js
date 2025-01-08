export const trackEvent = (action, category, label, value) => {
	if (process.env.NODE_ENV === "production" && typeof window !== "undefined") {
		window.gtag("event", action, {
			event_category: category,
			event_label: label,
			value: value,
		});
	}
};
