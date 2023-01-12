import { ucfirst } from "../common/ucfirst";

export const toPascalCase = (input: string): string => {
  return input.replace(/[_-]/g, " ").split(" ").map(ucfirst).join("");
};
