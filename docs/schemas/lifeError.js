import generateErrors from "./generateErrors.js";
import { getPlanErrorSchema } from "./planError.js";

export function getLifeErrorSchema(action) {
  const fields = [
    "cost_share",
    "type",
    "multiple",
    "multiple_max",
    "flat_amount",
    "add",
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
