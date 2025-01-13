import generateErrors from "./generateErrors.js";
import { getPlanErrorSchema } from "./planError.js";

export function getStoplossErrorSchema(action) {
  const fields = [
    "spec_ded",
    "spec_rate_single",
    "spec_rate_family",
    "num_lasers",
    "agg_rate",
  ];

  const fieldErrors = generateErrors(fields);
  const planErrors = getPlanErrorSchema(action);
  delete planErrors.pt;

  return {
    type: "object",
    properties: {
      ...planErrors,
      ...fieldErrors,
    },
  };
}
