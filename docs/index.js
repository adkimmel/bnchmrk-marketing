// docs/index.js

import { getEmployerReqBody } from "./requestBodies/employerReqBody.js";
import { getMedicalReqBody } from "./requestBodies/medicalReqBody.js";
import { getDentalReqBody } from "./requestBodies/dentalReqBody.js";
import { getVisionReqBody } from "./requestBodies/visionReqBody.js";
import { getLifeReqBody } from "./requestBodies/lifeReqBody.js";
import { getStdReqBody } from "./requestBodies/stdReqBody.js";
import { getLtdReqBody } from "./requestBodies/ltdReqBody.js";
import { getStoplossReqBody } from "./requestBodies/stoplossReqBody.js";
import { getUserReqBody } from "./requestBodies/userReqBody.js";
import { getDivisionReqBody } from "./requestBodies/divisionReqBody.js";
import { getUserToDivisionReqBody } from "./requestBodies/userToDivisionReqBody.js";
import { getSuccess } from "./responses/getSuccess.js";
import { getError } from "./responses/getError.js";
import {
	info,
	empTag,
	medTag,
	denTag,
	visTag,
	lifTag,
	stdTag,
	ltdTag,
	slTag,
	userTag,
} from "./descriptions.js";

export function getApiDocs() {
	return {
		openapi: "3.0.0",
		info: {
			title: "Bnchmrk Partner API",
			description: info.join("\n\n"),
		},
		tags: [
			{ name: "Employers", description: empTag.join("\n") },
			{ name: "Medical/Rx Plans", description: medTag.join("\n") },
			{ name: "Dental Plans", description: denTag.join("\n") },
			{ name: "Vision Plans", description: visTag.join("\n") },
			{ name: "Life and AD&D Plans", description: lifTag.join("\n") },
			{ name: "Short-Term Disability Plans", description: stdTag.join("\n") },
			{ name: "Long-Term Disability Plans", description: ltdTag.join("\n") },
			{ name: "Stop Loss Plans", description: slTag.join("\n") },
			{ name: "Manage Users", description: userTag.join("\n") },
		],
		servers: [
			{
				url: "https://api.bnchmrk.com/partner",
				description: "Production server",
			},
			{
				url: "https://api-testing.bnchmrk.com/partner",
				description: "Staging server for testing",
			},
		],
		paths: {
			"/employers/": {
				post: {
					summary: "Create Employer",
					tags: ["Employers"],
					security: [{ ApiKeyAuth: [] }],
					requestBody: { ...getEmployerReqBody() },
					responses: {
						200: { ...getSuccess("employer", "get") },
						400: { ...getError("employer", "post") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
			},
			"/employers/{employerID}/": {
				get: {
					summary: "Get Employer",
					tags: ["Employers"],
					parameters: [{ $ref: "#/components/parameters/employerID" }],
					security: [{ ApiKeyAuth: [] }],
					responses: {
						200: { ...getSuccess("employer", "get") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
				put: {
					summary: "Update Employer",
					tags: ["Employers"],
					parameters: [{ $ref: "#/components/parameters/employerID" }],
					security: [{ ApiKeyAuth: [] }],
					requestBody: { ...getEmployerReqBody() },
					responses: {
						200: { ...getSuccess("employer", "get") },
						400: { ...getError("employer", "get") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
				delete: {
					summary: "Delete Employer",
					tags: ["Employers"],
					parameters: [{ $ref: "#/components/parameters/employerID" }],
					security: [{ ApiKeyAuth: [] }],
					responses: {
						200: { description: "Success" },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
			},
			"/employers/list/": {
				get: {
					summary: "Get Employers List",
					tags: ["Employers"],
					security: [{ ApiKeyAuth: [] }],
					responses: {
						200: { ...getSuccess("employerList") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
			},
			"/plans/medical/": {
				post: {
					summary: "Create Medical Plan",
					tags: ["Medical/Rx Plans"],
					security: [{ ApiKeyAuth: [] }],
					requestBody: { ...getMedicalReqBody() },
					responses: {
						200: { ...getSuccess("medical", "get") },
						400: { ...getError("medical", "post") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
			},
			"/plans/medical/{planID}/": {
				get: {
					summary: "Get Medical Plan",
					tags: ["Medical/Rx Plans"],
					parameters: [{ $ref: "#/components/parameters/planID" }],
					security: [{ ApiKeyAuth: [] }],
					responses: {
						200: { ...getSuccess("medical", "get") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
				put: {
					summary: "Update Medical Plan",
					tags: ["Medical/Rx Plans"],
					parameters: [{ $ref: "#/components/parameters/planID" }],
					security: [{ ApiKeyAuth: [] }],
					requestBody: { ...getMedicalReqBody() },
					responses: {
						200: { ...getSuccess("medical", "get") },
						400: { ...getError("medical", "get") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
				delete: {
					summary: "Delete Medical Plan",
					tags: ["Medical/Rx Plans"],
					parameters: [{ $ref: "#/components/parameters/planID" }],
					security: [{ ApiKeyAuth: [] }],
					responses: {
						200: { description: "Success." },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
			},
			"/plans/dental/": {
				post: {
					summary: "Create Dental Plan",
					tags: ["Dental Plans"],
					security: [{ ApiKeyAuth: [] }],
					requestBody: { ...getDentalReqBody() },
					responses: {
						200: { ...getSuccess("dental", "get") },
						400: { ...getError("dental", "post") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
			},
			"/plans/dental/{planID}/": {
				get: {
					summary: "Get Dental Plan",
					tags: ["Dental Plans"],
					parameters: [{ $ref: "#/components/parameters/planID" }],
					security: [{ ApiKeyAuth: [] }],
					responses: {
						200: { ...getSuccess("dental", "get") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
				put: {
					summary: "Update Dental Plan",
					tags: ["Dental Plans"],
					parameters: [{ $ref: "#/components/parameters/planID" }],
					security: [{ ApiKeyAuth: [] }],
					requestBody: { ...getDentalReqBody() },
					responses: {
						200: { ...getSuccess("dental", "get") },
						400: { ...getError("dental", "get") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
				delete: {
					summary: "Delete Dental Plan",
					tags: ["Dental Plans"],
					parameters: [{ $ref: "#/components/parameters/planID" }],
					security: [{ ApiKeyAuth: [] }],
					responses: {
						200: { description: "Success." },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
			},
			"/plans/vision/": {
				post: {
					summary: "Create Vision Plan",
					tags: ["Vision Plans"],
					security: [{ ApiKeyAuth: [] }],
					requestBody: { ...getVisionReqBody() },
					responses: {
						200: { ...getSuccess("vision", "get") },
						400: { ...getError("vision", "post") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
			},
			"/plans/vision/{planID}/": {
				get: {
					summary: "Get Vision Plan",
					tags: ["Vision Plans"],
					parameters: [{ $ref: "#/components/parameters/planID" }],
					security: [{ ApiKeyAuth: [] }],
					responses: {
						200: { ...getSuccess("vision", "get") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
				put: {
					summary: "Update Vision Plan",
					tags: ["Vision Plans"],
					parameters: [{ $ref: "#/components/parameters/planID" }],
					security: [{ ApiKeyAuth: [] }],
					requestBody: { ...getVisionReqBody() },
					responses: {
						200: { ...getSuccess("vision", "get") },
						400: { ...getError("vision", "get") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
				delete: {
					summary: "Delete Vision Plan",
					tags: ["Vision Plans"],
					parameters: [{ $ref: "#/components/parameters/planID" }],
					security: [{ ApiKeyAuth: [] }],
					responses: {
						200: { description: "Success." },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
			},
			"/plans/life/": {
				post: {
					summary: "Create Life Plan",
					tags: ["Life and AD&D Plans"],
					security: [{ ApiKeyAuth: [] }],
					requestBody: { ...getLifeReqBody() },
					responses: {
						200: { ...getSuccess("life", "get") },
						400: { ...getError("life", "post") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
			},
			"/plans/life/{planID}/": {
				get: {
					summary: "Get Life Plan",
					tags: ["Life and AD&D Plans"],
					parameters: [{ $ref: "#/components/parameters/planID" }],
					security: [{ ApiKeyAuth: [] }],
					responses: {
						200: { ...getSuccess("life", "get") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
				put: {
					summary: "Update Life Plan",
					tags: ["Life and AD&D Plans"],
					parameters: [{ $ref: "#/components/parameters/planID" }],
					security: [{ ApiKeyAuth: [] }],
					requestBody: { ...getLifeReqBody() },
					responses: {
						200: { ...getSuccess("life", "get") },
						400: { ...getError("life", "get") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
				delete: {
					summary: "Delete Life Plan",
					tags: ["Life and AD&D Plans"],
					parameters: [{ $ref: "#/components/parameters/planID" }],
					security: [{ ApiKeyAuth: [] }],
					responses: {
						200: { description: "Success." },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
			},
			"/plans/std/": {
				post: {
					summary: "Create STD Plan",
					tags: ["Short-Term Disability Plans"],
					security: [{ ApiKeyAuth: [] }],
					requestBody: { ...getStdReqBody() },
					responses: {
						200: { ...getSuccess("std", "get") },
						400: { ...getError("std", "post") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
			},
			"/plans/std/{planID}/": {
				get: {
					summary: "Get STD Plan",
					tags: ["Short-Term Disability Plans"],
					parameters: [{ $ref: "#/components/parameters/planID" }],
					security: [{ ApiKeyAuth: [] }],
					responses: {
						200: { ...getSuccess("std", "get") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
				put: {
					summary: "Update STD Plan",
					tags: ["Short-Term Disability Plans"],
					parameters: [{ $ref: "#/components/parameters/planID" }],
					security: [{ ApiKeyAuth: [] }],
					requestBody: { ...getStdReqBody() },
					responses: {
						200: { ...getSuccess("std", "get") },
						400: { ...getError("std", "get") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
				delete: {
					summary: "Delete STD Plan",
					tags: ["Short-Term Disability Plans"],
					parameters: [{ $ref: "#/components/parameters/planID" }],
					security: [{ ApiKeyAuth: [] }],
					responses: {
						200: { description: "Success." },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
			},
			"/plans/ltd/": {
				post: {
					summary: "Create LTD Plan",
					tags: ["Long-Term Disability Plans"],
					security: [{ ApiKeyAuth: [] }],
					requestBody: { ...getLtdReqBody() },
					responses: {
						200: { ...getSuccess("ltd", "get") },
						400: { ...getError("ltd", "post") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
			},
			"/plans/ltd/{planID}/": {
				get: {
					summary: "Get LTD Plan",
					tags: ["Long-Term Disability Plans"],
					parameters: [{ $ref: "#/components/parameters/planID" }],
					security: [{ ApiKeyAuth: [] }],
					responses: {
						200: { ...getSuccess("ltd", "get") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
				put: {
					summary: "Update LTD Plan",
					tags: ["Long-Term Disability Plans"],
					parameters: [{ $ref: "#/components/parameters/planID" }],
					security: [{ ApiKeyAuth: [] }],
					requestBody: { ...getLtdReqBody() },
					responses: {
						200: { ...getSuccess("ltd", "get") },
						400: { ...getError("ltd", "get") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
				delete: {
					summary: "Delete LTD Plan",
					tags: ["Long-Term Disability Plans"],
					parameters: [{ $ref: "#/components/parameters/planID" }],
					security: [{ ApiKeyAuth: [] }],
					responses: {
						200: { description: "Success." },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
			},
			"/plans/stoploss/": {
				post: {
					summary: "Create Stop Loss Plan",
					tags: ["Stop Loss Plans"],
					security: [{ ApiKeyAuth: [] }],
					requestBody: { ...getStoplossReqBody() },
					responses: {
						200: { ...getSuccess("stoploss", "get") },
						400: { ...getError("stoploss", "post") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
			},
			"/plans/stoploss/{planID}/": {
				get: {
					summary: "Get Stop Loss Plan",
					tags: ["Stop Loss Plans"],
					parameters: [{ $ref: "#/components/parameters/planID" }],
					security: [{ ApiKeyAuth: [] }],
					responses: {
						200: { ...getSuccess("stoploss", "get") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
				put: {
					summary: "Update Stop Loss Plan",
					tags: ["Stop Loss Plans"],
					parameters: [{ $ref: "#/components/parameters/planID" }],
					security: [{ ApiKeyAuth: [] }],
					requestBody: { ...getStoplossReqBody() },
					responses: {
						200: { ...getSuccess("stoploss", "get") },
						400: { ...getError("stoploss", "get") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
				delete: {
					summary: "Delete Stop Loss Plan",
					tags: ["Stop Loss Plans"],
					parameters: [{ $ref: "#/components/parameters/planID" }],
					security: [{ ApiKeyAuth: [] }],
					responses: {
						200: { description: "Success." },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
			},
			"/users/": {
				post: {
					summary: "Create User",
					tags: ["Manage Users"],
					security: [{ ApiKeyAuth: [] }],
					requestBody: { ...getUserReqBody() },
					responses: {
						200: { ...getSuccess("user", "get") },
						400: { ...getError("user", "post") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
			},
			"/users/{userID}/": {
				get: {
					summary: "Get User by ID",
					tags: ["Manage Users"],
					parameters: [{ $ref: "#/components/parameters/userID" }],
					security: [{ ApiKeyAuth: [] }],
					responses: {
						200: { ...getSuccess("user", "get") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
				put: {
					summary: "Update User",
					tags: ["Manage Users"],
					parameters: [{ $ref: "#/components/parameters/userID" }],
					security: [{ ApiKeyAuth: [] }],
					requestBody: { ...getUserReqBody() },
					responses: {
						200: { ...getSuccess("user", "get") },
						400: { ...getError("user", "get") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
				delete: {
					summary: "Delete User",
					tags: ["Manage Users"],
					parameters: [{ $ref: "#/components/parameters/userID" }],
					security: [{ ApiKeyAuth: [] }],
					responses: {
						200: { description: "Success." },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
			},
			"/users/byEmail/{email}/": {
				get: {
					summary: "Get User by Email",
					tags: ["Manage Users"],
					parameters: [{ $ref: "#/components/parameters/email" }],
					security: [{ ApiKeyAuth: [] }],
					responses: {
						200: { ...getSuccess("user", "get") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
			},
			"/users/list/": {
				get: {
					summary: "Get Users List",
					tags: ["Manage Users"],
					security: [{ ApiKeyAuth: [] }],
					responses: {
						200: { ...getSuccess("userList") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
			},
			"/divisions/": {
				post: {
					summary: "Create Division",
					tags: ["Manage Users"],
					security: [{ ApiKeyAuth: [] }],
					requestBody: { ...getDivisionReqBody() },
					responses: {
						200: { ...getSuccess("division", "get") },
						400: { ...getError("division", "post") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
			},
			"/divisions/{divisionID}/": {
				get: {
					summary: "Get Division by ID",
					tags: ["Manage Users"],
					parameters: [{ $ref: "#/components/parameters/divisionID" }],
					security: [{ ApiKeyAuth: [] }],
					responses: {
						200: { ...getSuccess("division", "get") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
				put: {
					summary: "Update Division",
					tags: ["Manage Users"],
					parameters: [{ $ref: "#/components/parameters/divisionID" }],
					security: [{ ApiKeyAuth: [] }],
					requestBody: { ...getDivisionReqBody() },
					responses: {
						200: { ...getSuccess("division", "get") },
						400: { ...getError("division", "get") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
				delete: {
					summary: "Delete Division",
					tags: ["Manage Users"],
					parameters: [{ $ref: "#/components/parameters/divisionID" }],
					security: [{ ApiKeyAuth: [] }],
					responses: {
						200: { description: "Success." },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
			},
			"/divisions/byEmployer/{employerID}/": {
				get: {
					summary: "Get Division by Employer ID",
					tags: ["Manage Users"],
					parameters: [{ $ref: "#/components/parameters/employerID" }],
					security: [{ ApiKeyAuth: [] }],
					responses: {
						200: { ...getSuccess("division", "get") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
			},
			"/divisions/list/": {
				get: {
					summary: "Get Divisions List",
					tags: ["Manage Users"],
					security: [{ ApiKeyAuth: [] }],
					responses: {
						200: { ...getSuccess("divisionList") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
			},
			"/divisions/{divisionID}/addUser/": {
				post: {
					summary: "Add User to Division",
					tags: ["Manage Users"],
					security: [{ ApiKeyAuth: [] }],
					requestBody: { ...getUserToDivisionReqBody() },
					responses: {
						200: { ...getSuccess("division", "get") },
						400: { ...getError("userToDivision", "post") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
			},
			"/divisions/{divisionID}/removeUser/": {
				post: {
					summary: "Remove User from Division",
					tags: ["Manage Users"],
					security: [{ ApiKeyAuth: [] }],
					requestBody: { ...getUserToDivisionReqBody() },
					responses: {
						200: { ...getSuccess("division", "get") },
						400: { ...getError("userToDivision", "post") },
						401: { description: "Unauthorized." },
						404: { description: "Resource not found." },
					},
				},
			},
		},
		components: {
			securitySchemes: {
				ApiKeyAuth: {
					type: "apiKey",
					in: "header",
					name: "Authorization",
					description:
						"Enter the token with the 'Token: ' prefix, e.g. 'Token abcde12345'",
				},
			},
			parameters: {
				employerID: {
					in: "path",
					name: "employerID",
					required: true,
					description: "UUID of the target employer.",
					schema: { type: "string" },
				},
				planID: {
					in: "path",
					name: "planID",
					required: true,
					description: "UUID of the target plan.",
					schema: { type: "string" },
				},
				userID: {
					in: "path",
					name: "userID",
					required: true,
					description: "UUID of the target user.",
					schema: { type: "string" },
				},
				email: {
					in: "path",
					name: "email",
					required: true,
					description: "Work email of the target user.",
					schema: { type: "string" },
				},
				divisionID: {
					in: "path",
					name: "divisionID",
					required: true,
					description: "UUID of the target division.",
					schema: { type: "string" },
				},
			},
		},
	};
}
