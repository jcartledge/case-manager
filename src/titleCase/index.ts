import { Brand } from "../common/types";
import { ucfirst } from "../common/string";

export type TitleCaseString = Brand<string, '#TitleCase'>

export const toTitleCase = (...input: string[]): TitleCaseString => {
  return input
    .join(" ")
    .replace(/[ ]+/g, " ")
    .replace(/([A-Z])/g, " $1")
    .replace(/^ /, "")
    .replace(/[_\- ]+/g, " ")
    .toLowerCase()
    .split(" ")
    .map(ucfirst)
    .join(" ") as TitleCaseString
}
