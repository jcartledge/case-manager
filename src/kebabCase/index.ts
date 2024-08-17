import { Brand } from "../common/types/brand";

export type KebabCaseString = Brand<string, '#KebabCase'>
export { isKebabCase } from "./isKebabCase";
export { toKebabCase } from "./toKebabCase";
