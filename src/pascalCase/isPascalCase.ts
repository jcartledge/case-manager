export const isPascalCase = (input: string): boolean =>
  /^([A-Z][a-z]+)+$/.test(input);
