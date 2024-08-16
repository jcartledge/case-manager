import { lcfirst } from "../common/lcfirst";
import { ucfirst } from "../common/ucfirst";

export const toCamelCase = (...input: string[]): string =>
  lcfirst(input.join(" ").replace(/[_-]/g, " ").split(" ").map(ucfirst).join(""));
