import { ucfirst } from "../common/ucfirst";
import { TitleCaseString } from ".";

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
