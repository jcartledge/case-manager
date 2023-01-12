import test from "ava";
import { toTitleCase } from "./toTitleCase";

test("FromPascalCase", (t) => {
  t.is(toTitleCase("FromPascalCase"), "From Pascal Case");
});

test("from-kebab-case", (t) => {
  t.is(toTitleCase("from-kebab-case"), "From Kebab Case");
});

test("fromCamelCase", (t) => {
  t.is(toTitleCase("fromCamelCase"), "From Camel Case");
});

test("From snake case", (t) => {
  t.is(toTitleCase("from_snake_case"), "From Snake Case");
});

test("From sentence case", (t) => {
  t.is(toTitleCase("From sentence case"), "From Sentence Case");
});
