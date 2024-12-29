// utils/makeRequest.js

const makeRequest = async (method, url, body = null) => {
	const API_USERNAME = process.env.API_USERNAME;
	const API_PASSWORD = process.env.API_PASSWORD;
	const API_URL = process.env.API_URL;

	const headers = new Headers({ "Content-Type": "application/json" });

	headers.append(
		"Authorization",
		`Basic ${btoa(`${API_USERNAME}:${API_PASSWORD}`)}`
	);

	const fetchOptions = {
		method,
		headers,
		...(body && { body: JSON.stringify(body) }),
	};

	try {
		const response = await fetch(`${API_URL}${url}`, fetchOptions);
		const data = await response.json();

		if (Array.isArray(data)) {
			return { list: data, ok: response.ok };
		}

		return { ...data, ok: response.ok };
	} catch (error) {
		console.error("Error in makeRequest:", error.message);
		return { error: error.message, ok: false };
	}
};

module.exports = makeRequest;
