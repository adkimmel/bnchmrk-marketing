import { getEmployerErrorSchema } from "../schemas/employerError.js";
import { getMedicalErrorSchema } from "../schemas/medicalError.js";
import { getDentalErrorSchema } from "../schemas/dentalError.js";
import { getVisionErrorSchema } from "../schemas/visionError.js";
import { getLifeErrorSchema } from "../schemas/lifeError.js";
import { getStdErrorSchema } from "../schemas/stdError.js";
import { getLtdErrorSchema } from "../schemas/ltdError.js";
import { getStoplossErrorSchema } from "../schemas/stoplossError.js";
import { getUserErrorSchema } from "../schemas/userError.js";
import { getDivisionErrorSchema } from "../schemas/divisionError.js";
import { getUserToDivisionErrorSchema } from "../schemas/userToDivisionError.js";

export function getError(plan, action) {
  const response = { description: "Bad request / invalid data" };

  switch (plan) {
    case "employer":
      response.content = {
        "application/json": { schema: { ...getEmployerErrorSchema(action) } },
      };
      break;

    case "medical":
      response.content = {
        "application/json": { schema: { ...getMedicalErrorSchema(action) } },
      };
      break;

    case "dental":
      response.content = {
        "application/json": { schema: { ...getDentalErrorSchema(action) } },
      };
      break;

    case "vision":
      response.content = {
        "application/json": { schema: { ...getVisionErrorSchema(action) } },
      };
      break;

    case "life":
      response.content = {
        "application/json": { schema: { ...getLifeErrorSchema(action) } },
      };
      break;

    case "std":
      response.content = {
        "application/json": { schema: { ...getStdErrorSchema(action) } },
      };
      break;

    case "ltd":
      response.content = {
        "application/json": { schema: { ...getLtdErrorSchema(action) } },
      };
      break;

    case "stoploss":
      response.content = {
        "application/json": { schema: { ...getStoplossErrorSchema(action) } },
      };
      break;

    case "user":
      response.content = {
        "application/json": { schema: { ...getUserErrorSchema(action) } },
      };
      break;

    case "division":
      response.content = {
        "application/json": { schema: { ...getDivisionErrorSchema(action) } },
      };
      break;

    case "userToDivision":
      response.content = {
        "application/json": {
          schema: { ...getUserToDivisionErrorSchema(action) },
        },
      };
      break;

    default:
      break;
  }

  return response;
}
