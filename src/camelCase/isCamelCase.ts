import { CamelCaseString } from ".";

export const isCamelCase = (input: string): input is CamelCaseString =>
  /^[a-z]+([A-Z][a-z]+)*$/.test(input);
