import test from "ava";
import { toSentenceCase } from "./toSentenceCase";

test("FromPascalCase", (t) => {
  t.is(toSentenceCase("FromPascalCase"), "From pascal case");
});

test("from-kebab-case", (t) => {
  t.is(toSentenceCase("from-kebab-case"), "From kebab case");
});

test("fromCamelCase", (t) => {
  t.is(toSentenceCase("fromCamelCase"), "From camel case");
});

test("From snake case", (t) => {
  t.is(toSentenceCase("from_snake_case"), "From snake case");
});

test("From Title Case", (t) => {
  t.is(toSentenceCase("From Title Case"), "From title case");
});
