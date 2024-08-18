import test from "ava";

import { PascalCaseString, pascalCaseStringBuilder } from "..";

test("behaves like toPascalCase with no prefix supplied", (t) => {
  const builder = pascalCaseStringBuilder();
  t.is(builder("some", "string"), "SomeString" as PascalCaseString);
});

test("prepends the prefix if it's supplied", (t) => {
  const builder = pascalCaseStringBuilder("some", "prefix");
  t.is(builder("some", "string"), "SomePrefixSomeString" as PascalCaseString);
});
