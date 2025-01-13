import generateErrors from "./generateErrors.js";

export function getRatesErrorSchema() {
  const fields = [
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

  const plan = generateErrors(fields);

  return plan;
}
