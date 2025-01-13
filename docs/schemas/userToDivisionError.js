import generateErrors from "./generateErrors.js";

export function getUserToDivisionErrorSchema(action) {
  const fields = ["email"];

  const user = generateErrors(fields);

  return {
    type: "object",
    properties: user,
  };
}
