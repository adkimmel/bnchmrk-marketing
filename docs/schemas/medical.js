import { getPlanSchema, getPlanReqFields } from "./plan.js";
import { getRatesSchema, getRatesReqFields } from "./rates.js";

export function getMedicalSchema(action) {
  const dedApply =
    "\n\n- FALSE= Deductible and Coinsurance do not apply. \n\n- FALSE_COIN= Only Coinsurance applies. \n\n- TRUE= Only Deductible applies. \n\n- TRUE_COIN= Deductible and Coinsurance both apply.";

  return {
    type: "object",
    properties: {
      ...getPlanSchema(action),
      ...getRatesSchema(),
      type: {
        type: "string",
        enum: ["PPO", "POS", "EPO", "HMO", "HDHP"],
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
      in_max_single: {
        type: "integer",
        description:
          "The maximum dollar amount a single tier employee will pay toward in-network expenses within a calendar year. It includes the deductible, coinsurance and copays.",
      },
      in_max_family: {
        type: "integer",
        description:
          "The maximum dollar amount a family tier employee will pay toward in-network expenses within a calendar year. It includes the deductible, coinsurance and copays.",
      },
      in_coin: {
        type: "integer",
        description:
          "The percentage amount that the employee is expected to cover for in-network services.",
      },
      out_ded_single: {
        type: "integer",
        description:
          "The dollar amount of eligible expenses a covered single tier employee must pay each year out of pocket before the plan will make payment for eligible benefits out-of-network.",
      },
      out_ded_family: {
        type: "integer",
        description:
          "The dollar amount of eligible expenses a covered family tier employee must pay each year out of pocket before the plan will make payment for eligible benefits out-of-network.",
      },
      out_max_single: {
        type: "integer",
        description:
          "The maximum dollar amount a single tier employee will pay toward out-of-network expenses within a calendar year. It includes the deductible, coinsurance and copays.",
      },
      out_max_family: {
        type: "integer",
        description:
          "The maximum dollar amount a family tier employee will pay toward out-of-network expenses within a calendar year. It includes the deductible, coinsurance and copays.",
      },
      out_coin: {
        type: "integer",
        description:
          "The percentage amount that the employee is expected to cover for out-of-network services.",
      },
      rx_ded_single: {
        type: "integer",
        description:
          "Only provide a value here if Rx has a seperate single deductible from Medical; otherwise, set to null.",
      },
      rx_ded_family: {
        type: "integer",
        description:
          "Only provide a value here if Rx has a seperate family deductible from Medical; otherwise, set to null.",
      },
      rx_max_single: {
        type: "integer",
        description:
          "Only provide a value here if Rx has a seperate single Max OOP from Medical; otherwise, set to null.",
      },
      rx_max_family: {
        type: "integer",
        description:
          "Only provide a value here if Rx has a seperate family Max OOP from Medical; otherwise, set to null.",
      },
      rx_coin: {
        type: "integer",
        description:
          "The percentage amount that the employee is expected to cover for out-of-network services.",
      },
      pcp_ded_apply: {
        type: "string",
        enum: ["FALSE", "FALSE_COIN", "TRUE", "TRUE_COIN"],
        description:
          "Does the deductible and/or coinsurance apply to Primary Care Physician visits?" +
          dedApply,
      },
      sp_ded_apply: {
        type: "string",
        enum: ["FALSE", "FALSE_COIN", "TRUE", "TRUE_COIN"],
        description:
          "Does the deductible and/or coinsurance apply to Specialist Physician visits?" +
          dedApply,
      },
      er_ded_apply: {
        type: "string",
        enum: ["FALSE", "FALSE_COIN", "TRUE", "TRUE_COIN"],
        description:
          "Does the deductible and/or coinsurance apply to Emergency Room visits?" +
          dedApply,
      },
      uc_ded_apply: {
        type: "string",
        enum: ["FALSE", "FALSE_COIN", "TRUE", "TRUE_COIN"],
        description:
          "Does the deductible and/or coinsurance apply to Urgent Care visits?" +
          dedApply,
      },
      lx_ded_apply: {
        type: "string",
        enum: ["FALSE", "FALSE_COIN", "TRUE", "TRUE_COIN"],
        description:
          "Does the deductible and/or coinsurance apply to Basic Lab and Xray services?" +
          dedApply,
      },
      ip_ded_apply: {
        type: "string",
        enum: ["FALSE", "FALSE_COIN", "TRUE", "TRUE_COIN"],
        description:
          "Does the deductible and/or coinsurance apply to Inpatient Visits?" +
          dedApply,
      },
      op_ded_apply: {
        type: "string",
        enum: ["FALSE", "FALSE_COIN", "TRUE", "TRUE_COIN"],
        description:
          "Does the deductible and/or coinsurance apply to Outpatient Visits?" +
          dedApply,
      },
      rx1_ded_apply: {
        type: "string",
        enum: ["FALSE", "FALSE_COIN", "TRUE", "TRUE_COIN"],
        description:
          "Does the deductible and/or coinsurance apply to Tier 1 Generic Rx (retail 30 days)?" +
          dedApply,
      },
      rx2_ded_apply: {
        type: "string",
        enum: ["FALSE", "FALSE_COIN", "TRUE", "TRUE_COIN"],
        description:
          "Does the deductible and/or coinsurance apply to Tier 2 Preferred Brand Rx (retail 30 days)?" +
          dedApply,
      },
      rx3_ded_apply: {
        type: "string",
        enum: ["FALSE", "FALSE_COIN", "TRUE", "TRUE_COIN"],
        description:
          "Does the deductible and/or coinsurance apply to Tier 3 Non-Preferred Brand Rx (retail 30 days)?" +
          dedApply,
      },
      rx4_ded_apply: {
        type: "string",
        enum: ["FALSE", "FALSE_COIN", "TRUE", "TRUE_COIN"],
        description:
          "Does the deductible and/or coinsurance apply to Tier 4 Specialty Rx (retail 30 days)?" +
          dedApply,
      },
      rx1_mail_ded_apply: {
        type: "string",
        enum: ["FALSE", "FALSE_COIN", "TRUE", "TRUE_COIN"],
        description:
          "Does the deductible and/or coinsurance apply to Tier 1 Generic Rx (mail order 90 days)?" +
          dedApply,
      },
      rx2_mail_ded_apply: {
        type: "string",
        enum: ["FALSE", "FALSE_COIN", "TRUE", "TRUE_COIN"],
        description:
          "Does the deductible and/or coinsurance apply to Tier 2 Preferred Brand Rx (mail order 90 days)?" +
          dedApply,
      },
      rx3_mail_ded_apply: {
        type: "string",
        enum: ["FALSE", "FALSE_COIN", "TRUE", "TRUE_COIN"],
        description:
          "Does the deductible and/or coinsurance apply to Tier 3 Non-Preferred Brand Rx (mail order 90 days)?" +
          dedApply,
      },
      rx4_mail_ded_apply: {
        type: "string",
        enum: ["FALSE", "FALSE_COIN", "TRUE", "TRUE_COIN"],
        description:
          "Does the deductible and/or coinsurance apply to Tier 4 Specialty Rx (mail order 90 days)?" +
          dedApply,
      },
      pcp_copay: {
        type: "integer",
        description:
          "Single payment that applies to Primary Care Physician visits in-network. Only provide a value if a copay is required.",
      },
      sp_copay: {
        type: "integer",
        description:
          "Single payment that applies to Specialist Physician visits in-network. Only provide a value if a copay is required.",
      },
      er_copay: {
        type: "integer",
        description:
          "Single payment that applies to Emergency Room visits in-network. Only provide a value if a copay is required.",
      },
      uc_copay: {
        type: "integer",
        description:
          "Single payment that applies to Urgent Care visits in-network. Only provide a value if a copay is required.",
      },
      lx_copay: {
        type: "integer",
        description:
          "Single payment that applies to Basic Lab & X-ray services in-network. Only provide a value if a copay is required.",
      },
      ip_copay: {
        type: "integer",
        description:
          "Single payment that applies to Inpatient Hospital visits in-network. Only provide a value if a copay is required.",
      },
      op_copay: {
        type: "integer",
        description:
          "Single payment that applies to Outpatient Hospital visits in-network. Only provide a value if a copay is required.",
      },
      rx1_copay: {
        type: "integer",
        description:
          "Single payment that applies to Tier 1 Generic Rx (retail 30 days) in-network. Only provide a value if a copay is required.",
      },
      rx2_copay: {
        type: "integer",
        description:
          "Single payment that applies to Tier 2 Preferred Brand Rx (retail 30 days) in-network. Only provide a value if a copay is required.",
      },
      rx3_copay: {
        type: "integer",
        description:
          "Single payment that applies to Tier 3 Non-Preferred Brand Rx (retail 30 days) in-network. Only provide a value if a copay is required.",
      },
      rx4_copay: {
        type: "integer",
        description:
          "Single payment that applies to Tier 4 Specialty Rx (retail 30 days) in-network. Only provide a value if a copay is required.",
      },
      rx1_mail_copay: {
        type: "integer",
        description:
          "Single payment that applies to Tier 1 Generic Rx (mail order 90 days) in-network. Only provide a value if a copay is required.",
      },
      rx2_mail_copay: {
        type: "integer",
        description:
          "Single payment that applies to Tier 2 Preferred Brand Rx (mail order 90 days) in-network. Only provide a value if a copay is required.",
      },
      rx3_mail_copay: {
        type: "integer",
        description:
          "Single payment that applies to Tier 3 Non-Preferred Brand Rx (mail order 90 days) in-network. Only provide a value if a copay is required.",
      },
      rx4_mail_copay: {
        type: "integer",
        description:
          "Single payment that applies to Tier 4 Specialty Rx (mail order 90 days) in-network. Only provide a value if a copay is required.",
      },
      hra: {
        type: "boolean",
        description: "Is an HRA offered with the Medical/Rx plan?",
      },
      hsa: {
        type: "boolean",
        description: "Is an HSA offered with the Medical/Rx plan?",
      },
      fsa: {
        type: "boolean",
        description: "Is an FSA offered with the Medical/Rx plan?",
      },
      age_rated: {
        type: "boolean",
        description:
          "Are the premium rates based 100% on age-banded or community ratings?",
      },
      salary_banding: {
        type: "boolean",
        description:
          "Do the employee contributions vary based on employee salary?",
      },
      tobacco_surcharge: {
        type: "integer",
        nullable: true,
        description:
          "Additional amount employees are required to pay annually (PEPY) based on tested or self-reported tobacco use. If not required, set to null.",
      },
      spousal_surcharge: {
        type: "integer",
        nullable: true,
        description:
          "Additional amount employees are required to pay annually (PEPY) based on whether spouse is working/retired and is eligible for medical coverage through their employer/former employer. If not required, set to null.",
      },
      t1_ercdhp: {
        type: "integer",
        nullable: true,
        description:
          "The amount funded to single tier employees' HSA account each year by the employer",
      },
      t2_ercdhp: {
        type: "integer",
        nullable: true,
        description:
          "The amount funded to employee + spouse tier employees' HSA account each year by the employer",
      },
      t3_ercdhp: {
        type: "integer",
        nullable: true,
        description:
          "The amount funded to employee + children tier employees' HSA account each year by the employer",
      },
      t4_ercdhp: {
        type: "integer",
        nullable: true,
        description:
          "The amount funded to employee + family tier employees' HSA account each year by the employer",
      },
    },

    required: [
      ...getPlanReqFields(),
      ...getRatesReqFields(),
      "type",
      "in_ded_single",
      "in_ded_family",
      "in_max_single",
      "in_max_family",
      "in_coin",
      "pcp_ded_apply",
      "sp_ded_apply",
      "er_ded_apply",
      "uc_ded_apply",
      "lx_ded_apply",
      "ip_ded_apply",
      "op_ded_apply",
      "rx1_ded_apply",
      "rx2_ded_apply",
      "hra",
      "hsa",
      "fsa",
      "age_rated",
      "salary_banding",
      "spousal_surcharge",
      "tobacco_surcharge",
      "t1_ercdhp",
      "t2_ercdhp",
      "t3_ercdhp",
      "t4_ercdhp",
    ],
  };
}
