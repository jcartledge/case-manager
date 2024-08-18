import test from "ava";

import { CamelCaseString, camelCaseStringBuilder } from "..";

test("behaves like toCamelCase with no prefix supplied", (t) => {
  const builder = camelCaseStringBuilder();
  t.is(builder("some", "string"), "someString" as CamelCaseString);
});

test("prepends the prefix if it's supplied", (t) => {
  const builder = camelCaseStringBuilder("some", "prefix");
  t.is(builder("some", "string"), "somePrefixSomeString" as CamelCaseString);
});
