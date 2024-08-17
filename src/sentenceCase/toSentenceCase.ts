import { SentenceCaseString } from ".";
import { ucfirst } from "../common/string";

export const toSentenceCase = (...input: string[]): SentenceCaseString => {
  return ucfirst(
    input.join(" ")
      .replace(/[ ]+/g, " ")
      .replace(/([A-Z])/g, " $1")
      .replace(/^ /, "")
      .replace(/[_\- ]+/g, " ")
      .toLowerCase()
  ) as SentenceCaseString;
};
