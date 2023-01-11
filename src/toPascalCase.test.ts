import test from "ava";
import { toPascalCase } from "./toPascalCase";

test("from_snake_case", (t) => {
  t.is(toPascalCase("from_snake_case"), "FromSnakeCase");
});

test("from-kebab-case", (t) => {
  t.is(toPascalCase("from-kebab-case"), "FromKebabCase");
});

test("fromCamelCase", (t) => {
  t.is(toPascalCase("FromPascalCase"), "FromPascalCase");
});

test("From sentence case", (t) => {
  t.is(toPascalCase("From sentence case"), "FromSentenceCase");
});

test("From Title Case", (t) => {
  t.is(toPascalCase("From Title Case"), "FromTitleCase");
});
