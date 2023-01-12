export const ucfirst = (input: string): string => {
  const [first, ...rest] = input;
  return [first.toUpperCase(), ...rest].join("");
};
