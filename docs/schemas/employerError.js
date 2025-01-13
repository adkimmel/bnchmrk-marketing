import generateErrors from "./generateErrors.js";

export function getEmployerErrorSchema(action) {
  const fields = [
    "name",
    "url",
    "size",
    "naics_codes",
    "location_states",
    "other_filters",
    "division",
  ];

  const plan = generateErrors(fields);

  return {
    type: "object",
    properties: plan,
  };
}
