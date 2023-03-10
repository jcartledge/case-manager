export const toKebabCase = (input: string): string => {
  return input
    .replace(/[ ]+/g, "-")
    .replace(/([A-Z])/g, "-$1")
    .replace(/^-/, "")
    .replace(/[_-]+/g, "-")
    .toLowerCase();
};
