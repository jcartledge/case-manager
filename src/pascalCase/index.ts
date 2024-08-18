import { ucfirst } from "../common/string";
import { Brand } from "../common/types";

export type PascalCaseString = Brand<string, "#PascalCase">;

export const isPascalCase = (input: string): input is PascalCaseString =>
  /^([A-Z][a-z]+)+$/.test(input);

export const toPascalCase = (...input: string[]): PascalCaseString => {
  return input
    .join(" ")
    .replace(/[_-]/g, " ")
    .split(" ")
    .map(ucfirst)
    .join("") as PascalCaseString;
};
