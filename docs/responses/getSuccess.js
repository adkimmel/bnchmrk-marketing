import { getEmployerSchema } from "../schemas/employer.js";
import { getEmployerListSchema } from "../schemas/employerList.js";
import { getMedicalSchema } from "../schemas/medical.js";
import { getDentalSchema } from "../schemas/dental.js";
import { getVisionSchema } from "../schemas/vision.js";
import { getLifeSchema } from "../schemas/life.js";
import { getStdSchema } from "../schemas/std.js";
import { getLtdSchema } from "../schemas/ltd.js";
import { getStoplossSchema } from "../schemas/stoploss.js";
import { getUserSchema } from "../schemas/user.js";
import { getUserListSchema } from "../schemas/userList.js";
import { getDivisionSchema } from "../schemas/division.js";
import { getDivisionListSchema } from "../schemas/divisionList.js";

export function getSuccess(plan, action) {
  const response = { description: "Success" };

  switch (plan) {
    case "employer":
      response.content = {
        "application/json": { schema: { ...getEmployerSchema(action) } },
      };
      break;

    case "employerList":
      response.content = {
        "application/json": { schema: { ...getEmployerListSchema() } },
      };
      break;

    case "medical":
      response.content = {
        "application/json": { schema: { ...getMedicalSchema(action) } },
      };
      break;

    case "dental":
      response.content = {
        "application/json": { schema: { ...getDentalSchema(action) } },
      };
      break;

    case "vision":
      response.content = {
        "application/json": { schema: { ...getVisionSchema(action) } },
      };
      break;

    case "life":
      response.content = {
        "application/json": { schema: { ...getLifeSchema(action) } },
      };
      break;

    case "std":
      response.content = {
        "application/json": { schema: { ...getStdSchema(action) } },
      };
      break;

    case "ltd":
      response.content = {
        "application/json": { schema: { ...getLtdSchema(action) } },
      };
      break;

    case "stoploss":
      response.content = {
        "application/json": { schema: { ...getStoplossSchema(action) } },
      };
      break;

    case "user":
      response.content = {
        "application/json": { schema: { ...getUserSchema(action) } },
      };
      break;

    case "userList":
      response.content = {
        "application/json": { schema: { ...getUserListSchema() } },
      };
      break;

    case "division":
      response.content = {
        "application/json": { schema: { ...getDivisionSchema() } },
      };
      break;

    case "divisionList":
      response.content = {
        "application/json": { schema: { ...getDivisionListSchema() } },
      };
      break;

    default:
      break;
  }

  return response;
}
