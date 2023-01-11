import { lcfirst } from "./util/lcfirst";
import { ucfirst } from "./util/ucfirst";

export const toCamelCase = (input: string): string => {
  return lcfirst(input.replace(/[_-]/g, " ").split(" ").map(ucfirst).join(""));
};
