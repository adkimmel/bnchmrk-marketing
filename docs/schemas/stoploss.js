import { getPlanSchema, getPlanReqFields } from "./plan.js";

export function getStoplossSchema(action) {
  const plan = getPlanSchema(action);
  delete plan.pt;
  return {
    type: "object",
    properties: {
      ...plan,
      spec_ded: {
        type: "integer",
        description:
          "The dollar amount to be paid by the plan on each covered individual before the stop loss policy kicks in to reimburse expenses incurred during the contract period.",
      },
      spec_rate_single: {
        type: "integer",
        description:
          "Annual amount paid by employer for specific stop loss insurance for single tier employees.",
      },
      spec_rate_family: {
        type: "integer",
        description:
          "Annual amount paid by employer for specific stop loss insurance for family tier employees.",
      },
      num_lasers: {
        type: "integer",
        description:
          "Number of individuals covered by the stop loss policy at a higher Specific deductible than the rest of the group, based on prior claims experience or known conditions.",
      },
      agg_rate: {
        type: "integer",
        description:
          "Annual amount paid by employer for aggregate stop-loss insurance per employee. If Aggregate insurance is not offered, set to null.",
      },
    },
    required: [
      ...getPlanReqFields(),
      "spec_ded",
      "spec_rate_single",
      "spec_rate_family",
      "num_lasers",
    ],
  };
}
