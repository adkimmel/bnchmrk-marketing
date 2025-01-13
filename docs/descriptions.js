// docs/descriptions.js

export const info = [
	"The Bnchmrk Partner API provides seamless integration for managing employer and benefit plan data.",
	"### Key Features:",
	"- Create and manage employer records.",
	"- Add and update benefit plans such as Medical, Dental, Vision, Life, and Disability.",
	"- Manage users and divisions with granular access control.",
	"### Authentication:",
	"All requests require an API token in the header:",
	"`Authorization: Token XXXXXXXXXXXXXXXXXXXXXXXXXXXX`",
	"Ensure all requests are made over HTTPS for security.",
];

export const empTag = [
	"Employer records represent companies or clients for whom benefit plans are managed.",
];

export const medTag = [
	"Medical and Rx plans cover healthcare expenses, including doctor visits, hospital stays, and medications.",
	"### Key Requirements:",
	"- Premium rates must be provided as annual amounts (PEPY).",
	"- Avoid creating duplicate plans by using a single record per plan.",
];

export const denTag = [
	"Dental plans cover expenses related to oral health care, including cleanings, fillings, and orthodontics.",
	"### Key Requirements:",
	"- Premium rates must be provided as annual amounts (PEPY).",
	"- Avoid creating duplicate plans by using a single record per plan.",
];

export const visTag = [
	"Vision plans cover expenses related to eye care, including exams, glasses, and contact lenses.",
	"### Key Requirements:",
	"- Premium rates must be provided as annual amounts (PEPY).",
	"- Avoid creating duplicate plans by using a single record per plan.",
];

export const lifTag = [
	"Life and AD&D (Accidental Death and Dismemberment) plans provide financial protection in case of death or severe injury.",
	"### Key Considerations:",
	"- Policies with different classes of employees should be recorded as separate plans.",
	"- Only general cost-sharing categories are collected (e.g., '100% Employer Paid', 'Voluntary').",
];

export const stdTag = [
	"Short-Term Disability (STD) plans provide income replacement for employees unable to work due to temporary disability.",
	"### Key Considerations:",
	"- Policies with different classes of employees should be recorded as separate plans.",
	"- Only general cost-sharing categories are collected (e.g., '100% Employer Paid', 'Voluntary').",
];

export const ltdTag = [
	"Long-Term Disability (LTD) plans provide income replacement for employees unable to work due to prolonged disability.",
	"### Key Considerations:",
	"- Policies with different classes of employees should be recorded as separate plans.",
	"- Only general cost-sharing categories are collected (e.g., '100% Employer Paid', 'Voluntary').",
];

export const slTag = [
	"Stop Loss plans provide protection against catastrophic losses for self-funded Medical/Rx plans.",
	"### Key Features:",
	"- Stop Loss policies must be linked to corresponding self-funded Medical/Rx plans.",
	"- Provide the specific and aggregate deductible rates for each Stop Loss plan.",
];

export const userTag = [
	"Control user access to your Bnchmrk account through programmatic methods.",
	"### Important Notes:",
	"- Usernames are generated automatically by Bnchmrk and must be unique.",
	"- Duplicate emails are not allowed when creating users.",
];
