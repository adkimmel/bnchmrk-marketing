import generateErrors from "./generateErrors.js";
import { getPlanErrorSchema } from "./planError.js";

export function getLtdErrorSchema(action) {
  const fields = ["cost_share", "percentage", "monthly_max", "waiting_weeks"];

  const plan = generateErrors(fields);

  return {
    type: "object",
    properties: {
      ...getPlanErrorSchema(action),
      ...plan,
    },
  };
}
