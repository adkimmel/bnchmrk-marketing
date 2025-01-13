export function getUserListSchema() {
  const properties = {
    id: {
      type: "string",
      format: "uuid",
      description: "Unique ID assigned by Bnchmrk on creation of user.",
    },
    email: {
      type: "string",
      description: "User's work email address.",
    },
    username: {
      type: "string",
      description: "Unique username assigned to user.",
    },
  };

  return {
    type: "array",
    items: {
      type: "object",
      properties: properties,
    },
  };
}
