import test from "ava";

import { KebabCaseString, kebabCaseStringBuilder } from "..";

test("behaves like toKebabCase with no prefix supplied", (t) => {
  const builder = kebabCaseStringBuilder();
  t.is(builder("some", "string"), "some-string" as KebabCaseString);
});

test("prepends the prefix if it's supplied", (t) => {
  const builder = kebabCaseStringBuilder("some", "prefix");
  t.is(builder("some", "string"), "some-prefix-some-string" as KebabCaseString);
});
