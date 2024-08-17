import { PascalCaseString } from ".";

export const isPascalCase = (input: string): input is PascalCaseString =>
  /^([A-Z][a-z]+)+$/.test(input);
