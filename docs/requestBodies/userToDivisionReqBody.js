import { getUserToDivisionSchema } from "../schemas/userToDivision.js";

export function getUserToDivisionReqBody() {
  return {
    required: true,
    content: {
      "application/json": {
        schema: { ...getUserToDivisionSchema("post") },
        examples: {
          user: {
            value: {
              email: "demo_user@bnchmrk.com",
            },
          },
        },
      },
    },
  };
}
