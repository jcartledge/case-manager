import { Brand } from "../common/types";

export type SnakeCaseString = Brand<string, '#SnakeCase'>

export const isSnakeCase = (input: string): input is SnakeCaseString =>
  /^[a-z]+(_[a-z]+)*$/.test(input);

export const toSnakeCase = (...input: string[]): SnakeCaseString => {
  return input.join(" ")
    .replace(/[ ]+/g, "_")
    .replace(/([A-Z])/g, "_$1")
    .replace(/^_/, "")
    .replace(/[_-]+/g, "_")
    .toLowerCase() as SnakeCaseString;
}
