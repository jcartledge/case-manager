export const isSentenceCase = (input: string): boolean =>
  /^([A-Z][a-z]*)( [a-z]*)*$/.test(input);
