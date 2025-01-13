export default function generateErrors(fields) {
  const properties = {};

  for (let i = 0; i < fields.length; ++i) {
    properties[fields[i]] = {
      type: "array",
      description:
        "List of data validation errors for '" + fields[i] + "' field.",
      items: {
        type: "string",
      },
    };
  }

  return properties;
}
