import { Brand } from "./types";

export const casedStringBuilder =
  <T extends Brand<string, string>>(
    casedStringFunc: (...input: string[]) => T,
  ) =>
  (...prefix: string[]) =>
  (...input: string[]) =>
    casedStringFunc(...prefix, ...input);
