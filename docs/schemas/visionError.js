import generateErrors from "./generateErrors.js";
import { getPlanErrorSchema } from "./planError.js";
import { getRatesErrorSchema } from "./ratesError.js";

export function getVisionErrorSchema(action) {
  const fields = [
    "exam_frequency",
    "lenses_frequency",
    "frames_frequency",
    "contacts_frequency",
    "exam_copay",
    "lenses_copay",
    "frames_copay",
    "contacts_copay",
    "exam_allowance",
    "lenses_allowance",
    "frames_allowance",
    "contacts_allowance",
    "exam_out_allowance",
    "lenses_out_allowance",
    "frames_out_allowance",
    "contacts_out_allowance",
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
