import { getVisionSchema } from "../schemas/vision.js";

export function getVisionReqBody() {
  return {
    required: true,
    content: {
      "application/json": {
        schema: { ...getVisionSchema("post") },
        examples: {
          vision: {
            value: {
              employer: "7574457f-e9ed-4a65-8baa-72b8088b9f45",
              title: "Sample Vision Plan",
              carrier: "VSP",
              start_date: "2023-01-01",
              end_date: "2023-12-31",
              from_plan: "837f56e4-cd62-4749-91be-acb043070cc4",
              from_action: "RENEWED",
              pt: false,
              funding: "FUNDING_FULLY",
              t1_ee: 85,
              t2_ee: 150,
              t3_ee: 144,
              t4_ee: 235,
              t1_gross: 85,
              t2_gross: 150,
              t3_gross: 144,
              t4_gross: 235,
              exam_frequency: 12,
              lenses_frequency: 12,
              frames_frequency: 24,
              contacts_frequency: 12,
              exam_copay: 10,
              lenses_copay: 15,
              frames_copay: null,
              contacts_copay: null,
              exam_allowance: null,
              lenses_allowance: null,
              frames_allowance: 180,
              contacts_allowance: 180,
              exam_out_allowance: 45,
              lenses_out_allowance: 32,
              frames_out_allowance: 44,
              contacts_out_allowance: 105,
            },
          },
        },
      },
    },
  };
}
