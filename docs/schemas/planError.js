import generateErrors from "./generateErrors.js";

export function getPlanErrorSchema(action) {
  const fields = [
    "employer",
    "title",
    "carrier",
    "start_date",
    "end_date",
    "from_plan",
    "from_action",
    "pt",
  ];

  const plan = generateErrors(fields);

  if (action != "post") {
    return Object.assign(
      {
        id: {
          type: "array",
          description: "List of data validation errors for 'id' field.",
          items: {
            type: "string",
          },
        },
      },
      plan
    );
  } else {
    return plan;
  }
}
