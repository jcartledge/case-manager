export const lcfirst = (input: string): string => {
  const [first, ...rest] = input.split("");
  return [first.toLowerCase(), ...rest].join("");
};

export const ucfirst = (input: string): string => {
  const [first, ...rest] = input.split("");
  return [first.toUpperCase(), ...rest].join("");
};

