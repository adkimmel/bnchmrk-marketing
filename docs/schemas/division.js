export function getDivisionSchema(action) {
  const required = ["name", "users", "employer_ids"];

  const properties = {
    name: {
      type: "string",
      description: "Unique name assigned to division.",
    },
    users: {
      type: "array",
      items: { type: "string" },
      uniqueItems: true,
      description: "List of users' work emails assigned to division.",
    },
    employer_ids: {
      type: "array",
      items: {
        type: "string",
        format: "uuid",
      },
      uniqueItems: true,
      description: "List of employer IDs assigned to division.",
    },
  };

  if (action != "post") {
    const full_properties = Object.assign(
      {
        id: {
          type: "string",
          format: "uuid",
          description: "Unique ID assigned by Bnchmrk on creation of division.",
        },
      },
      properties
    );

    return {
      type: "object",
      properties: full_properties,
      required: required,
    };
  } else {
    return {
      type: "object",
      properties: properties,
      required: required,
    };
  }
}
