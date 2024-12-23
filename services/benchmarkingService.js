// services/benchmarkingServices.js

import makeRequest from "@/utils/makeRequest";

export const employerFiltersApi = () => {
	return makeRequest("GET", "/filters/");
};

export const employerCountApi = (query) => {
	return makeRequest("POST", "/benchmarking/employer-count/", query);
};

export const getTotalPlans = () => {
	return makeRequest("GET", "/total-plans/");
};

export const getNaicsApi = () => {
	return makeRequest("GET", "/naics/");
};
