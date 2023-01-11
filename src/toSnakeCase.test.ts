import test from "ava";
import { toSnakeCase } from "./toSnakeCase";

test("FromPascalCase", (t) => {
  t.is(toSnakeCase("FromPascalCase"), "from_pascal_case");
});

test("from-kebab-case", (t) => {
  t.is(toSnakeCase("from-kebab-case"), "from_kebab_case");
});

test("fromCamelCase", (t) => {
  t.is(toSnakeCase("fromCamelCase"), "from_camel_case");
});

test("From sentence case", (t) => {
  t.is(toSnakeCase("From sentence case"), "from_sentence_case");
});

test("From Title Case", (t) => {
  t.is(toSnakeCase("From Title Case"), "from_title_case");
});
