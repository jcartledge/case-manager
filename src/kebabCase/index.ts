import { casedStringBuilder } from "../common/casedStringBuilder";
import { Brand } from "../common/types";

export type KebabCaseString = Brand<string, "#KebabCase">;

export const isKebabCase = (input: string): input is KebabCaseString =>
  /^[a-z]+(-[a-z]+)*$/.test(input);

export const toKebabCase = (...input: string[]): KebabCaseString => {
  return input
    .join(" ")
    .replace(/[ ]+/g, "-")
    .replace(/([A-Z])/g, "-$1")
    .replace(/^-/, "")
    .replace(/[_-]+/g, "-")
    .toLowerCase() as KebabCaseString;
};

export const kebabCaseStringBuilder = casedStringBuilder(toKebabCase);
