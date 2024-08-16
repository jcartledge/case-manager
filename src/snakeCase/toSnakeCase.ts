export const toSnakeCase = (...input: string[]): string => {
  return input.join(" ")
    .replace(/[ ]+/g, "_")
    .replace(/([A-Z])/g, "_$1")
    .replace(/^_/, "")
    .replace(/[_-]+/g, "_")
    .toLowerCase();
};
