import { getPlanSchema, getPlanReqFields } from "./plan.js";

export function getStdSchema(action) {
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
          "Portion of weekly earnings eligible to receive up to a specific maximum amount. Some plans employ a “step-down”, where there are two percentages. Usually a higher percentage to start that drops down after a few weeks. In this case, use a weighted average.",
      },
      weekly_max: {
        type: "integer",
        description: "Maximum benefit amount employees can receive each week.",
      },
      waiting_days_injury: {
        type: "integer",
        description:
          "The number of days the employee must be disabled due to injury before being eligible to receive STD benefits.",
      },
      waiting_days_sick: {
        type: "integer",
        description:
          "The number of days the employee must be disabled due to illness before being eligible to receive STD benefits.",
      },
      duration_weeks: {
        type: "integer",
        description:
          "The maximum number of weeks that an employee will receive STD benefits. This duration figure does not include the elimination period.",
      },
    },
    required: [
      ...getPlanReqFields(),
      "cost_share",
      "percentage",
      "weekly_max",
      "waiting_days_injury",
      "waiting_days_sick",
      "duration_weeks",
    ],
  };
}
