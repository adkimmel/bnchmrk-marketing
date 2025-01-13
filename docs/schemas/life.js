import { getPlanSchema, getPlanReqFields } from "./plan.js";

export function getLifeSchema(action) {
  return {
    type: "object",
    properties: {
      ...getPlanSchema(action),
      cost_share: {
        type: "string",
        enum: ["EMPLOYER_PAID", "EMPLOYEE_COST_SHARE", "VOLUNTARY"],
        description:
          "Used to differentiate plans within the benefit class based on how premium cost is shared.",
      },
      type: {
        type: "string",
        enum: ["FLAT_AMOUNT", "MULTIPLE_OF_SALARY"],
        description:
          "Used to differentiate plans within the benefit class based on how benefits are paid.",
      },
      multiple: {
        type: "number",
        format: "float",
        description:
          "The multiply factor of salary used to calculate a variable total death benefit to be paid to beneficiaries. Required if type is set to 'MULTIPLE_OF_SALARY'",
      },
      multiple_max: {
        type: "integer",
        description:
          "The maximum total death benefit to be paid to beneficiaries. Required if type is set to 'MULTIPLE_OF_SALARY'",
      },
      flat_amount: {
        type: "integer",
        description:
          "The fixed total death benefit to be paid to beneficiaries. Required if type is set to 'FLAT_AMOUNT'",
      },
      add: {
        type: "boolean",
        description: "Is AD&D offered along with the life plan?",
      },
    },
    required: [...getPlanReqFields(), "cost_share", "type", "add"],
  };
}
