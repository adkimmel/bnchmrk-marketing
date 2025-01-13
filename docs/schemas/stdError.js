import generateErrors from "./generateErrors.js";
import { getPlanErrorSchema } from "./planError.js";

export function getStdErrorSchema(action) {
  const fields = [
    "cost_share",
    "percentage",
    "weekly_max",
    "waiting_days_injury",
    "waiting_days_sick",
    "duration_weeks",
  ];

  const plan = generateErrors(fields);

  return {
    type: "object",
    properties: {
      ...getPlanErrorSchema(action),
      ...plan,
    },
  };
}
