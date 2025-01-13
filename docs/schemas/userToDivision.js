export function getUserToDivisionSchema(action) {
  const required = ["email"];

  const properties = {
    email: {
      type: "string",
      description: "User's work email address.",
    },
  };

  return {
    type: "object",
    properties: properties,
    required: required,
  };
}
