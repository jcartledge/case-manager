export const ucfirst = (input: string): string => {
  const [first, ...rest] = input.split("");
  return [first.toUpperCase(), ...rest].join("");
};
