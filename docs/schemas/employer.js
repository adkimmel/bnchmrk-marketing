export function getEmployerSchema(action) {
  const required = [
    "name",
    "url",
    "size",
    "naics_codes",
    "location_states",
    "other_filters",
    "division",
    "plans",
  ];

  const properties = {
    name: {
      type: "string",
      description:
        "Provide a unique employer name to identify and differentiate. Please create only one record per employer.",
    },
    url: {
      type: "string",
      description:
        "Unique web address for employer. Should start with 'https://' or 'http://'.",
    },
    size: {
      type: "string",
      description: "Number of full-time eligible employees.",
    },
    naics_codes: {
      type: "array",
      items: {
        type: "string",
      },
      uniqueItems: true,
      description: "List of 6 digit NAICS codes.",
    },
    location_states: {
      type: "array",
      items: {
        type: "string",
      },
      uniqueItems: true,
      description:
        "List of US states with physical locations. States formatted using capitalized 2 letter abbreviation.",
    },
    other_filters: {
      type: "array",
      items: {
        type: "string",
        format: "uuid",
      },
      uniqueItems: true,
      description: "Non-Profits, Government Contractors, and custom filters.",
    },
    division: {
      type: "string",
      format: "uuid",
      description:
        "Unique ID assigned to a dedicated group within an Account ensuring the security and protection of benefit data. Only users assigned to a division can view, edit, and report on employers/plans within that division.",
    },
  };

  if (action != "post") {
    const full_properties = Object.assign(
      {
        id: {
          type: "string",
          format: "uuid",
          description: "Unique ID assigned by Bnchmrk on creation of employer.",
        },
      },
      properties,
      {
        plans: {
          type: "array",
          items: {
            type: "object",
            properties: {
              benefit: {
                type: "string",
                enum: [
                  "medical",
                  "dental",
                  "vision",
                  "life",
                  "std",
                  "ltd",
                  "stoploss",
                ],
                description: "name of the object",
              },
              id: {
                type: "string",
                format: "uuid",
                description: "Unique Plan ID assigned by Bnchmrk.",
              },
            },
          },
          description: "List of benefit plans offered by employer.",
        },
        created_at: {
          type: "string",
          format: "date-time",
          description: "Date/time record created.",
        },
        created_by: {
          type: "string",
          format: "uuid",
          description: "ID of User who created record.",
        },
        updated_at: {
          type: "string",
          format: "date-time",
          description: "Date/time record updated.",
        },
        updated_by: {
          type: "string",
          format: "uuid",
          description: "ID of User who last updated record.",
        },
      }
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
