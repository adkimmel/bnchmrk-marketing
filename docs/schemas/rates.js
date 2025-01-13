export function getRatesSchema() {
  const plan = {
    funding: {
      type: "string",
      enum: ["FUNDING_FULLY", "FUNDING_LEVEL", "FUNDING_SELF"],
      description:
        "Used to differentiate plans within the benefit class based on how employer shares risk with carrier.",
    },
    t1_ee: {
      type: "integer",
      description:
        "Amount paid by a single (tier 1) employee per year (PEPY) to cover their portion of the cost of the plan.",
    },
    t2_ee: {
      type: "integer",
      description:
        "Amount paid by an employee + spouse (tier 2) employee per year (PEPY) to cover their portion of the cost of the plan. If 2 tier rate structure, use the 'Family' rate. If it's 3 tiers, use the 'Employee + 1' rate.",
    },
    t3_ee: {
      type: "integer",
      description:
        "Amount paid by an employee + children (tier 3) employee per year (PEPY) to cover their portion of the cost of the plan. If 2 tier rate structure, use the 'Family' rate. If it's 3 tiers, use either, the 'Employee + 1' or 'Family' rate. If 5 tiers, use mean of the 3rd and 4th tier.",
    },
    t4_ee: {
      type: "integer",
      description:
        "Amount paid by an employee + family (tier 4) employee per year (PEPY) to cover their portion of the cost of the plan.",
    },
    t1_gross: {
      type: "integer",
      description:
        "Full amount paid by the employer (before EE contributions) to cover a single (tier 1) employee per year (PEPY).",
    },
    t2_gross: {
      type: "integer",
      description:
        "Full amount paid by the employer (before EE contributions) to cover an employee + spouse (tier 2) employee per year (PEPY). If 2 tier rate structure, use the 'Family' rate. If it's 3 tiers, use the 'Employee + 1' rate.",
    },
    t3_gross: {
      type: "integer",
      description:
        "Full amount paid by the employer (before EE contributions) to cover an employee + children (tier 3) employee per year (PEPY). If 2 tier rate structure, use the 'Family' rate. If it's 3 tiers, use either, the 'Employee + 1' or 'Family' rate. If 5 tiers, use mean of the 3rd and 4th tier.",
    },
    t4_gross: {
      type: "integer",
      description:
        "Full amount paid by the employer (before EE contributions) to cover an employee + family (tier 4) employee per year (PEPY).",
    },
  };

  return plan;
}

export function getRatesReqFields() {
  return [
    "funding",
    "t1_ee",
    "t2_ee",
    "t3_ee",
    "t4_ee",
    "t1_gross",
    "t2_gross",
    "t3_gross",
    "t4_gross",
  ];
}
