import generateErrors from "./generateErrors.js";

export function getUserErrorSchema(action) {
  const fields = ["email", "first_name", "last_name", "division_ids"];

  const user = generateErrors(fields);

  return {
    type: "object",
    properties: user,
  };
}
