import { getPlanSchema, getPlanReqFields } from "./plan.js";
import { getRatesSchema, getRatesReqFields } from "./rates.js";

export function getVisionSchema(action) {
  return {
    type: "object",
    properties: {
      ...getPlanSchema(action),
      ...getRatesSchema(),
      exam_frequency: {
        type: "integer",
        description: "How often the exam benefit is covered, in months.",
      },
      lenses_frequency: {
        type: "integer",
        description: "How often the lenses benefit is covered, in months.",
      },
      frames_frequency: {
        type: "integer",
        description: "How often the frames benefit is covered, in months.",
      },
      contacts_frequency: {
        type: "integer",
        description: "How often the contacts benefit is covered, in months.",
      },
      exam_copay: {
        type: "integer",
        description:
          "Single payment that applies to exam in-network. Only provide a value if a copay is required.",
      },
      lenses_copay: {
        type: "integer",
        description:
          "Single payment that applies to lenses in-network. Only provide a value if a copay is required.",
      },
      frames_copay: {
        type: "integer",
        description:
          "Single payment that applies to frames in-network. Only provide a value if a copay is required.",
      },
      contacts_copay: {
        type: "integer",
        description:
          "Single payment that applies to contacts in-network. Only provide a value if a copay is required.",
      },
      exam_allowance: {
        type: "integer",
        description:
          "Amount covered by insurance that applies to exam in-network. Only provide a value if an allowance is part of the cost share.",
      },
      lenses_allowance: {
        type: "integer",
        description:
          "Amount covered by insurance that applies to lenses in-network. Only provide a value if an allowance is part of the cost share.",
      },
      frames_allowance: {
        type: "integer",
        description:
          "Amount covered by insurance that applies to frames in-network. Only provide a value if an allowance is part of the cost share.",
      },
      contacts_allowance: {
        type: "integer",
        description:
          "Amount covered by insurance that applies to contacts in-network. Only provide a value if an allowance is part of the cost share.",
      },
      exam_out_allowance: {
        type: "integer",
        description:
          "Amount covered by insurance that applies to exam out-of-network.",
      },
      lenses_out_allowance: {
        type: "integer",
        description:
          "Amount covered by insurance that applies to lenses out-of-network.",
      },
      frames_out_allowance: {
        type: "integer",
        description:
          "Amount covered by insurance that applies to frames out-of-network.",
      },
      contacts_out_allowance: {
        type: "integer",
        description:
          "Amount covered by insurance that applies to contacts out-of-network.",
      },
    },
    required: [
      ...getPlanReqFields(),
      ...getRatesReqFields(),
      "exam_frequency",
      "lenses_frequency",
      "frames_frequency",
      "contacts_frequency",
    ],
  };
}
