import { getStoplossSchema } from "../schemas/stoploss.js";

export function getStoplossReqBody() {
  return {
    required: true,
    content: {
      "application/json": {
        schema: { ...getStoplossSchema("post") },
        examples: {
          stoploss: {
            value: {
              employer: "7574457f-e9ed-4a65-8baa-72b8088b9f45",
              title: "Sample Stop Loss",
              carrier: "Sun Life",
              start_date: "2023-01-01",
              end_date: "2023-12-31",
              from_plan: "null",
              from_action: "null",
              spec_ded: 100000,
              spec_rate_single: 1700,
              spec_rate_family: 4200,
              num_lasers: 2,
              agg_rate: 89,
            },
          },
        },
      },
    },
  };
}
