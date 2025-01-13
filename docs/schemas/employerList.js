export function getEmployerListSchema() {
  const properties = {
    id: {
      type: "string",
      format: "uuid",
      description: "Unique ID assigned by Bnchmrk.",
    },
    name: {
      type: "string",
      description:
        "Unique employer name to identify and differentiate employers.",
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
