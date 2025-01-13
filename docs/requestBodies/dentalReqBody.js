import { getDentalSchema } from "../schemas/dental.js";

export function getDentalReqBody() {
  return {
    required: true,
    content: {
      "application/json": {
        schema: { ...getDentalSchema("post") },
        examples: {
          dental: {
            value: {
              employer: "7574457f-e9ed-4a65-8baa-72b8088b9f45",
              title: "Sample Dental Plan",
              carrier: "Delta Dental",
              start_date: "2023-01-01",
              end_date: "2023-12-31",
              from_plan: "2d373e05-28cb-401a-a0f5-2e8b7c0d524c",
              from_action: "RENEWED",
              pt: false,
              funding: "FUNDING_FULLY",
              type: "DPPO",
              t1_ee: 283,
              t2_ee: 567,
              t3_ee: 593,
              t4_ee: 905,
              t1_gross: 566,
              t2_gross: 1133,
              t3_gross: 1185,
              t4_gross: 1809,
              in_ded_single: 50,
              in_ded_family: 150,
              in_max: 1500,
              in_max_ortho: 1500,
              out_ded_single: 50,
              out_ded_family: 150,
              out_max: 1500,
              out_max_ortho: 1500,
              prev_ded_apply: false,
              basic_ded_apply: true,
              major_ded_apply: true,
              ortho_ded_apply: false,
              in_prev_coin: 0,
              in_basic_coin: 20,
              in_major_coin: 50,
              in_ortho_coin: 50,
              out_prev_coin: 0,
              out_basic_coin: 20,
              out_major_coin: 50,
              out_ortho_coin: 50,
            },
          },
        },
      },
    },
  };
}
