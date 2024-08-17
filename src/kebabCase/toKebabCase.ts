import { KebabCaseString } from ".";

export const toKebabCase = (...input: string[]): KebabCaseString => {
  return input.join(" ")
    .replace(/[ ]+/g, "-")
    .replace(/([A-Z])/g, "-$1")
    .replace(/^-/, "")
    .replace(/[_-]+/g, "-")
    .toLowerCase() as KebabCaseString;
};
