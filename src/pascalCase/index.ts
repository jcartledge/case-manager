import { Brand } from "../common/types";
import { ucfirst } from "../common/string";

export type PascalCaseString = Brand<string, '#PascalCase'>

export const isPascalCase = (input: string): input is PascalCaseString =>
  /^([A-Z][a-z]+)+$/.test(input);

export const toPascalCase = (...input: string[]): PascalCaseString => {
  return input.join(" ").replace(/[_-]/g, " ").split(" ").map(ucfirst).join("") as PascalCaseString;
};
