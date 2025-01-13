import { getUserSchema } from "../schemas/user.js";

export function getUserReqBody() {
  return {
    required: true,
    content: {
      "application/json": {
        schema: { ...getUserSchema("post") },
        examples: {
          user: {
            value: {
              email: "demo_user@bnchmrk.com",
              first_name: "Demo",
              last_name: "User",
              division_ids: ["f5635638-1fcd-44d3-9823-d97846774a1a"],
            },
          },
        },
      },
    },
  };
}
