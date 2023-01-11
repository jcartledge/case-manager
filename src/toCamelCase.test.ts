import test from "ava";
import { toCamelCase } from "./toCamelCase";

test("from_snake_case", (t) => {
  t.is(toCamelCase("from_snake_case"), "fromSnakeCase");
});

test("from-kebab-case", (t) => {
  t.is(toCamelCase("from-kebab-case"), "fromKebabCase");
});

test("FromPascalCase", (t) => {
  t.is(toCamelCase("FromPascalCase"), "fromPascalCase");
});

test("From sentence case", (t) => {
  t.is(toCamelCase("From sentence case"), "fromSentenceCase");
});

test("From Title Case", (t) => {
  t.is(toCamelCase("From Title Case"), "fromTitleCase");
});
