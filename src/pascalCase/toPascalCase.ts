import { ucfirst } from "../util/ucfirst";

export const toPascalCase = (input: string): string => {
  return input.replace(/[_-]/g, " ").split(" ").map(ucfirst).join("");
};
