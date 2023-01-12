import { ucfirst } from "../common/ucfirst";

export const toSentenceCase = (input: string): string => {
  return ucfirst(
    input
      .replace(/[ ]+/g, " ")
      .replace(/([A-Z])/g, " $1")
      .replace(/^ /, "")
      .replace(/[_\- ]+/g, " ")
      .toLowerCase()
  );
};
