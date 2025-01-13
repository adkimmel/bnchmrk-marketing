export function getDivisionListSchema() {
  const properties = {
    id: {
      type: "string",
      format: "uuid",
      description: "Unique ID assigned by Bnchmrk on creation of division.",
    },
    name: {
      type: "string",
      description: "Unique name assigned to division.",
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
