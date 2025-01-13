import { getStdSchema } from "../schemas/std.js";

export function getStdReqBody() {
  return {
    required: true,
    content: {
      "application/json": {
        schema: { ...getStdSchema("post") },
        examples: {
          std: {
            value: {
              employer: "e0b6d00a-d304-4b54-a133-05d1a0b1eaa9",
              title: "Sample STD Plan",
              carrier: "Mutual of Omaha",
              start_date: "2023-01-01",
              end_date: "2023-12-31",
              from_plan: "bfhdye0a-d3d3d404-4bd454-a13tihuf33",
              from_action: "RENEWED",
              pt: true,
              cost_share: "EMPLOYER_PAID",
              percentage: 60,
              weekly_max: 1250,
              waiting_days_injury: 7,
              waiting_days_sick: 7,
              duration_weeks: 12,
            },
          },
        },
      },
    },
  };
}
