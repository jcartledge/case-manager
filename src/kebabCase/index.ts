import { Brand } from "../common/types";

export type KebabCaseString = Brand<string, '#KebabCase'>
export { isKebabCase } from "./isKebabCase";
export { toKebabCase } from "./toKebabCase";
