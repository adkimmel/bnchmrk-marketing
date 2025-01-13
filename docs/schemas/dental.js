import { getPlanSchema, getPlanReqFields } from "./plan.js";
import { getRatesSchema, getRatesReqFields } from "./rates.js";

export function getDentalSchema(action) {
  return {
    type: "object",
    properties: {
      ...getPlanSchema(action),
      ...getRatesSchema(),
      type: {
        type: "string",
        enum: ["DPPO", "DMO"],
        description:
          "Used to differentiate plans within the benefit class based on how benefits are paid.",
      },
      in_ded_single: {
        type: "integer",
        description:
          "The dollar amount of eligible expenses a covered single tier employee must pay each year out of pocket before the plan will make payment for eligible benefits in-network.",
      },
      in_ded_family: {
        type: "integer",
        description:
          "The dollar amount of eligible expenses a covered family tier employee must pay each year out of pocket before the plan will make payment for eligible benefits in-network.",
      },
      in_max: {
        type: "integer",
        description:
          "The maximum dollar amount the plan will pay per member toward the in-network cost of dental care within a calendar year.",
      },
      in_max_ortho: {
        type: "integer",
        description:
          "The maximum dollar amount the plan will pay per member toward the in-network cost of orthodontia care in the member's lifetime.",
      },
      out_ded_single: {
        type: "integer",
        description:
          "The dollar amount of eligible expenses a covered single tier employee must pay each year out of pocket before the plan will make payment for eligible benefits out-of-network. Required if type is set to 'DPPO'.",
      },
      out_ded_family: {
        type: "integer",
        description:
          "The dollar amount of eligible expenses a covered family tier employee must pay each year out of pocket before the plan will make payment for eligible benefits out-of-network. Required if type is set to 'DPPO'.",
      },
      out_max: {
        type: "integer",
        description:
          "The maximum dollar amount the plan will pay per member toward the out-of-network cost of dental care within a calendar year. Required if type is set to 'DPPO'.",
      },
      out_max_ortho: {
        type: "integer",
        description:
          "The maximum dollar amount the plan will pay per member toward the out-of-network cost of orthodontia care in the member's lifetime.",
      },
      prev_ded_apply: {
        type: "boolean",
        description: "Does the deductible apply to preventive care?",
      },
      basic_ded_apply: {
        type: "boolean",
        description: "Does the deductible apply to basic care?",
      },
      major_ded_apply: {
        type: "boolean",
        nullable: true,
        description:
          "Does the deductible apply to major care? If major care is not covered, set to null.",
      },
      ortho_ded_apply: {
        type: "boolean",
        nullable: true,
        description:
          "Does the deductible apply to orthodontia care? If orthodontia care is not covered, set to null.",
      },
      in_prev_coin: {
        type: "integer",
        description:
          "The percentage amount that the employee is expected to cover for in-network preventive care. If the service is copay-based, set to null.",
      },
      in_basic_coin: {
        type: "integer",
        description:
          "The percentage amount that the employee is expected to cover for in-network basic care. If the service is copay-based, set to null.",
      },
      in_major_coin: {
        type: "integer",
        description:
          "The percentage amount that the employee is expected to cover for in-network major care. If the service is copay-based, set to null.",
      },
      in_ortho_coin: {
        type: "integer",
        description:
          "The percentage amount that the employee is expected to cover for in-network orthodontia care. If the service is copay-based, set to null.",
      },
      out_prev_coin: {
        type: "integer",
        description:
          "The percentage amount that the employee is expected to cover for out-of-network preventive care. If the service is copay-based, set to null.",
      },
      out_basic_coin: {
        type: "integer",
        description:
          "The percentage amount that the employee is expected to cover for out-of-network basic care. If the service is copay-based, set to null.",
      },
      out_major_coin: {
        type: "integer",
        description:
          "The percentage amount that the employee is expected to cover for out-of-network major care. If the service is copay-based, set to null.",
      },
      out_ortho_coin: {
        type: "integer",
        description:
          "The percentage amount that the employee is expected to cover for out-of-network orthodontia care. If the service is copay-based, set to null.",
      },
    },

    required: [
      ...getPlanReqFields(),
      ...getRatesReqFields(),
      "type",
      "in_ded_single",
      "in_ded_family",
      "in_max",
      "prev_ded_apply",
      "basic_ded_apply",
    ],
  };
}
