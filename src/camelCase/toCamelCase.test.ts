import test, { ExecutionContext } from "ava";
import { toCamelCase } from "./toCamelCase";

const is = (expected: string) => (t: ExecutionContext) => {
  t.is(toCamelCase(t.title), expected);
};

test("from_snake_case", is("fromSnakeCase"));
test("from-kebab-case", is("fromKebabCase"));
test("FromPascalCase", is("fromPascalCase"));
test("From sentence case", is("fromSentenceCase"));
test("From Title Case", is("fromTitleCase"));
