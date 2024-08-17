import { SnakeCaseString } from ".";

export const isSnakeCase = (input: string): input is SnakeCaseString =>
  /^[a-z]+(_[a-z]+)*$/.test(input);
