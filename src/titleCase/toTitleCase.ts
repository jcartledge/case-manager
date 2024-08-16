import { ucfirst } from "../common/ucfirst";

export const toTitleCase = (...input: string[]): string => {
  return input.join(" ")
    .replace(/[ ]+/g, " ")
    .replace(/([A-Z])/g, " $1")
    .replace(/^ /, "")
    .replace(/[_\- ]+/g, " ")
    .toLowerCase()
    .split(" ")
    .map(ucfirst)
    .join(" ");
};
