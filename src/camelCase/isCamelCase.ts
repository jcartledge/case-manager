export const isCamelCase = (input: string): boolean =>
  /^[a-z]+([A-Z][a-z]+)*$/.test(input);
