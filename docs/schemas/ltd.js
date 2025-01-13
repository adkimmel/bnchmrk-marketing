import { getPlanSchema, getPlanReqFields } from "./plan.js";

export function getLtdSchema(action) {
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
      percentage: {
        type: "integer",
        description:
          "Portion of monthly earnings eligible to receive up to a specific maximum amount. Some plans employ a “step-down”, where there are two percentages. Usually a higher percentage to start that drops down after a few weeks. In this case, use a weighted average.",
      },
      monthly_max: {
        type: "integer",
        description: "Maximum benefit amount employees can receive each month.",
      },
      waiting_weeks: {
        type: "integer",
        description:
          "The number of weeks the employee must be disabled before being eligible to receive LTD benefits.",
      },
    },
    required: [
      ...getPlanReqFields(),
      "cost_share",
      "percentage",
      "monthly_max",
      "waiting_weeks",
    ],
  };
}
