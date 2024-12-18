// app/services/benchmarkingServices.js

const makeRequest = require("../utils/makeRequest");

const employerCountApi = (query) => {
	return makeRequest("POST", "/benchmarking/employer-count/", query);
};

const employerFiltersApi = () => {
	return makeRequest("GET", "/filters/");
};

module.exports = {
	employerCountApi,
	employerFiltersApi,
};
