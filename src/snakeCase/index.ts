import { Brand } from "../common/types/brand";

export type SnakeCaseString = Brand<string, '#SnakeCase'>
export { toSnakeCase } from './toSnakeCase'
