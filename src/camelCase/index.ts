import { Brand } from "../common/types";

export type CamelCaseString = Brand<string, '#CamelCase'>
export { toCamelCase } from './toCamelCase'
export { isCamelCase } from './isCamelCase'
