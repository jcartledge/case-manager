import { Brand } from "../common/types";

export type SnakeCaseString = Brand<string, '#SnakeCase'>
export { toSnakeCase } from './toSnakeCase'
