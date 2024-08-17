import { KebabCaseString } from ".";

export const isKebabCase = (input: string): input is KebabCaseString =>
  /^[a-z]+(-[a-z]+)*$/.test(input);
