export const lcfirst = (input: string): string => {
  const [first, ...rest] = input;
  return [first.toLowerCase(), ...rest].join("");
};
