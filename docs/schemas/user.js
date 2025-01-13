export function getUserSchema(action) {
  const required = [
    "email",
    "username",
    "first_name",
    "last_name",
    "division_ids",
  ];

  const properties = {
    email: {
      type: "string",
      description: "User's work email address.",
    },
    first_name: {
      type: "string",
      description: "User's first name.",
    },
    last_name: {
      type: "string",
      description: "User's last name.",
    },
    division_ids: {
      type: "array",
      items: {
        type: "string",
        format: "uuid",
      },
      uniqueItems: true,
      description:
        "Unique ID assigned to a dedicated group within your account ensuring the security and protection of benefit data. Only users assigned to a division can view, edit, and report on employers/plans within that division.",
    },
  };

  if (action != "post") {
    const full_properties = Object.assign(
      {
        id: {
          type: "string",
          format: "uuid",
          description: "Unique ID assigned by Bnchmrk on creation of user.",
        },
        username: {
          type: "string",
          description: "Unique username  assigned to user.",
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
