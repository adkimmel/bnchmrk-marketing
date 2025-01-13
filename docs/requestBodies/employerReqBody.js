import { getEmployerSchema } from "../schemas/employer.js";

export function getEmployerReqBody() {
  return {
    required: true,
    content: {
      "application/json": {
        schema: { ...getEmployerSchema("post") },
        examples: {
          std: {
            value: {
              name: "Sample Employer",
              url: "http://www.employer.com",
              size: "155",
              naics_codes: ["123456", "987654"],
              location_states: ["CA", "FL", "TX"],
              other_filters: ["81c9bbfc-b683-48cc-b923-4d8ba0483331"],
              division: "2a0183c8-e8e5-4da4-9806-9cd545e3a2d5",
            },
          },
        },
      },
    },
  };
}
