import { Brand } from "../common/types/brand";

export type CamelCaseString = Brand<string, '#CamelCase'>
export { toCamelCase } from './toCamelCase'
export { isCamelCase } from './isCamelCase'
