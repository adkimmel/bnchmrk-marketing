import generateErrors from "./generateErrors.js";
import { getPlanErrorSchema } from "./planError.js";
import { getRatesErrorSchema } from "./ratesError.js";

export function getDentalErrorSchema(action) {
  const fields = [
    "type",
    "in_ded_single",
    "in_ded_family",
    "in_max",
    "in_max_ortho",
    "out_ded_single",
    "out_ded_family",
    "out_max",
    "out_max_ortho",
    "prev_ded_apply",
    "basic_ded_apply",
    "major_ded_apply",
    "ortho_ded_apply",
    "in_prev_coin",
    "in_basic_coin",
    "in_major_coin",
    "in_ortho_coin",
    "out_prev_coin",
    "out_basic_coin",
    "out_major_coin",
    "out_ortho_coin",
  ];

  const plan = generateErrors(fields);

  return {
    type: "object",
    properties: {
      ...getPlanErrorSchema(action),
      ...getRatesErrorSchema(),
      ...plan,
    },
  };
}
