import { casedStringBuilder } from "../common/casedStringBuilder";
import { ucfirst } from "../common/string";
import { Brand } from "../common/types";

export type TitleCaseString = Brand<string, "#TitleCase">;

export const isTitleCase = (input: string): input is TitleCaseString =>
  /^([A-Z][a-z]*)( [A-Z][a-z]*)*$/.test(input);

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
    .join(" ") as TitleCaseString;
};

export const titleCaseStringBuilder = casedStringBuilder(toTitleCase);
