import { casedStringBuilder } from "../common/casedStringBuilder";
import { ucfirst } from "../common/string";
import { Brand } from "../common/types";

export type SentenceCaseString = Brand<string, "#SentenceCase">;

export const isSentenceCase = (input: string): input is SentenceCaseString =>
  /^([A-Z][a-z]*)( [a-z]*)*$/.test(input);

export const toSentenceCase = (...input: string[]): SentenceCaseString => {
  return ucfirst(
    input
      .join(" ")
      .replace(/[ ]+/g, " ")
      .replace(/([A-Z])/g, " $1")
      .replace(/^ /, "")
      .replace(/[_\- ]+/g, " ")
      .toLowerCase(),
  ) as SentenceCaseString;
};

export const sentenceCaseStringBuilder = casedStringBuilder(toSentenceCase);
