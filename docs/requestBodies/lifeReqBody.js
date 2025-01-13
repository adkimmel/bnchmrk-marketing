import { getLifeSchema } from "../schemas/life.js";

export function getLifeReqBody() {
  return {
    required: true,
    content: {
      "application/json": {
        schema: { ...getLifeSchema("post") },
        examples: {
          life: {
            value: {
              employer: "7574457f-e9ed-4a65-8baa-72b8088b9f45",
              title: "Sample Life and AD&D Plan",
              carrier: "Mutual of Omaha",
              start_date: "2023-01-01",
              end_date: "2023-12-31",
              from_plan: "f5635638-1fcd-44d3-9823-d97846774a1a",
              from_action: "RENEWED",
              pt: false,
              cost_share: "EMPLOYER_PAID",
              type: "MULTIPLE_OF_SALARY",
              multiple: 1.0,
              multiple_max: 250000,
              flat_amount: null,
              add: true,
            },
          },
        },
      },
    },
  };
}
