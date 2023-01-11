export const toCamelCase = (input: string): string => {
  return lcfirst(input.replace(/[_-]/g, " ").split(" ").map(ucfirst).join(""));
};

const ucfirst = (input: string): string => {
  const [first, ...rest] = input;
  return [first.toUpperCase(), ...rest].join("");
};

const lcfirst = (input: string): string => {
  const [first, ...rest] = input;
  return [first.toLowerCase(), ...rest].join("");
};
