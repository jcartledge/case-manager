import { ucfirst } from "../common/ucfirst";

export const toPascalCase = (...input: string[]): string => {
  return input.join(" ").replace(/[_-]/g, " ").split(" ").map(ucfirst).join("");
};
