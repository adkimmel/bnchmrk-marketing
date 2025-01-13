export function getPlanSchema(action) {
  const plan = {
    employer: {
      type: "string",
      format: "uuid",
      description: "ID of employer that offers plan.",
    },
    title: {
      type: "string",
      description:
        "Unique plan title to identify and differentiate. Can match title provided by insurer.",
    },
    carrier: {
      type: "string",
      description:
        "Name of insurance company for fully-insured plans and ASO provider for self-insured plans.",
    },
    start_date: {
      type: "string",
      format: "date",
      description: "Formated YYYY-MM-DD.",
    },
    end_date: {
      type: "string",
      format: "date",
      description: "Formated YYYY-MM-DD.",
    },
    from_plan: {
      type: "string",
      format: "uuid",
      description:
        "ID of prior year plan from which current plan is renewed or converted.",
    },
    from_action: {
      type: "string",
      nullable: true,
      enum: ["RENEWED", "CONVERTED", null],
      description:
        "Prior year plan is renewed if with the same carrier or converted if moved to a different carrier.",
    },
    pt: {
      type: "boolean",
      description: "Is benefit offered to part time employees?",
    },
  };

  if (action != "post") {
    return Object.assign(
      {
        id: {
          type: "string",
          format: "uuid",
          description: "Unique ID assigned by Bnchmrk on creation of plan.",
        },
      },
      plan
    );
  } else {
    return plan;
  }
}

export function getPlanReqFields() {
  return ["employer", "title", "carrier", "start_date", "end_date", "pt"];
}
