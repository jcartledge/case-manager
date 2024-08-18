import { casedStringBuilder } from "../common/casedStringBuilder";
import { lcfirst, ucfirst } from "../common/string";
import { Brand } from "../common/types";

export type CamelCaseString = Brand<string, "#CamelCase">;

export const toCamelCase = (...input: string[]): CamelCaseString =>
  lcfirst(
    input.join(" ").replace(/[_-]/g, " ").split(" ").map(ucfirst).join(""),
  ) as CamelCaseString;

export const isCamelCase = (input: string): input is CamelCaseString =>
  /^[a-z]+([A-Z][a-z]+)*$/.test(input);

export const camelCaseStringBuilder = casedStringBuilder(toCamelCase);
