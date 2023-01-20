export const isKebabCase = (input: string): boolean =>
  /^[a-z]+(-[a-z]+)*$/.test(input);
