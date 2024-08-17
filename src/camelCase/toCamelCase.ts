import { CamelCaseString } from ".";
import { lcfirst } from "../common/lcfirst";
import { ucfirst } from "../common/ucfirst";

export const toCamelCase = (...input: string[]): CamelCaseString =>
  lcfirst(input.join(" ").replace(/[_-]/g, " ").split(" ").map(ucfirst).join("")) as CamelCaseString;
