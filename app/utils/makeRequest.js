// app/utils/makeRequest.js

const makeRequest = async (method, url, body = null) => {
	// const NEXT_PUBLIC_API_AUTH_TOKEN = process.env.NEXT_PUBLIC_API_AUTH_TOKEN;
	const NEXT_PUBLIC_API_USERNAME = process.env.NEXT_PUBLIC_API_USERNAME;
	const NEXT_PUBLIC_API_PASSWORD = process.env.NEXT_PUBLIC_API_PASSWORD;
	const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

	const headers = new Headers({
		"Content-Type": "application/json",
	});

	// headers.append("Authorization", `Token ${NEXT_PUBLIC_API_AUTH_TOKEN}`);
	headers.append(
		"Authorization",
		`Basic ${btoa(`${NEXT_PUBLIC_API_USERNAME}:${NEXT_PUBLIC_API_PASSWORD}`)}`
	);

	const fetchOptions = {
		method,
		headers,
		...(body && { body: JSON.stringify(body) }),
	};

	try {
		const response = await fetch(`${NEXT_PUBLIC_API_URL}${url}`, fetchOptions);
		const data = await response.json();

		// If data is an array, wrap it inside an object with a 'list' key
		if (Array.isArray(data)) {
			return { list: data, ok: response.ok };
		}

		// Otherwise, return the data object as usual
		return { ...data, ok: response.ok };
	} catch (error) {
		console.error("Error in makeRequest:", error.message);
		return { error: error.message, ok: false };
	}
};

module.exports = makeRequest;
