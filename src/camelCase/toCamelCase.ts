import { CamelCaseString } from ".";
import { lcfirst, ucfirst } from "../common/string";

export const toCamelCase = (...input: string[]): CamelCaseString =>
  lcfirst(input.join(" ").replace(/[_-]/g, " ").split(" ").map(ucfirst).join("")) as CamelCaseString;
