import { Brand } from "../common/types/brand";

export type CamelCaseString = Brand<string, '#CamelCase'>
export { isCamelCase } from "./isCamelCase";
export { toCamelCase } from "./toCamelCase";
