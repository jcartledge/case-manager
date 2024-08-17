import { Brand } from "../common/types/brand";

export type PascalCaseString = Brand<string, '#PascalCase'>
export { isPascalCase } from "./isPascalCase";
export { toPascalCase } from "./toPascalCase";
