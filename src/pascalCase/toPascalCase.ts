import { PascalCaseString } from ".";
import { ucfirst } from "../common/ucfirst";

export const toPascalCase = (...input: string[]): PascalCaseString => {
  return input.join(" ").replace(/[_-]/g, " ").split(" ").map(ucfirst).join("") as PascalCaseString;
};
