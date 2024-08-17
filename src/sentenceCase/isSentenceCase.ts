import { SentenceCaseString } from ".";

export const isSentenceCase = (input: string): input is SentenceCaseString =>
  /^([A-Z][a-z]*)( [a-z]*)*$/.test(input);
