import { getLtdSchema } from "../schemas/ltd.js";

export function getLtdReqBody() {
  return {
    required: true,
    content: {
      "application/json": {
        schema: { ...getLtdSchema("post") },
        examples: {
          ltd: {
            value: {
              employer: "e0b6d00a-d304-4b54-a133-05d1a0b1eaa9",
              title: "Sample LTD Plan",
              carrier: "Mutual of Omaha",
              start_date: "2023-01-01",
              end_date: "2023-12-31",
              from_plan: "bfhdye0a-d3d3d404-4bd454-a13tihuf33",
              from_action: "RENEWED",
              pt: true,
              cost_share: "EMPLOYER_PAID",
              percentage: 60,
              monthly_max: 12750,
              waiting_weeks: 26,
            },
          },
        },
      },
    },
  };
}
