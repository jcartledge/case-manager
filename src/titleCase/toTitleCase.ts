import { ucfirst } from "../util/ucfirst";

export const toTitleCase = (input: string): string => {
  return input
    .replace(/[ ]+/g, " ")
    .replace(/([A-Z])/g, " $1")
    .replace(/^ /, "")
    .replace(/[_\- ]+/g, " ")
    .toLowerCase()
    .split(" ")
    .map(ucfirst)
    .join(" ");
};
