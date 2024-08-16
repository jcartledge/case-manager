export const lcfirst = (input: string): string => {
  const [first, ...rest] = input.split("");
  return [first.toLowerCase(), ...rest].join("");
};
