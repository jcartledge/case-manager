import test from "ava";
import { toKebabCase } from "./toKebabCase";

test("FromPascalCase", (t) => {
  t.is(toKebabCase("FromPascalCase"), "from-pascal-case");
});

test("from_snake_case", (t) => {
  t.is(toKebabCase("from_snake-case"), "from-snake-case");
});

test("fromCamelCase", (t) => {
  t.is(toKebabCase("fromCamelCase"), "from-camel-case");
});

test("From sentence case", (t) => {
  t.is(toKebabCase("From sentence case"), "from-sentence-case");
});

test("From Title Case", (t) => {
  t.is(toKebabCase("From Title Case"), "from-title-case");
});
