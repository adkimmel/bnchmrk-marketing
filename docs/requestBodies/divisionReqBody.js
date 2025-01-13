import { getDivisionSchema } from "../schemas/division.js";

export function getDivisionReqBody() {
  return {
    required: true,
    content: {
      "application/json": {
        schema: { ...getDivisionSchema("post") },
        examples: {
          division: {
            value: {
              name: "Sample Division",
              users: [
                "demo1@bnchmrk.com",
                "demo2@bnchmrk.com",
                "demo3@bnchmrk.com",
              ],
              employer_ids: [
                "f5635638-1fcd-44d3-9823-d97846774a1a",
                "81c9bbfc-b683-48cc-b923-4d8ba0483331",
                "a47372a0-51ab-4be4-a269-59d638e9fccd",
                "2a0183c8-e8e5-4da4-9806-9cd545e3a2d5",
              ],
            },
          },
        },
      },
    },
  };
}
