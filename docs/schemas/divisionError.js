import generateErrors from "./generateErrors.js";

export function getDivisionErrorSchema(action) {
  const fields = ["name", "users", "employer_ids"];

  const division = generateErrors(fields);

  return {
    type: "object",
    properties: division,
  };
}
