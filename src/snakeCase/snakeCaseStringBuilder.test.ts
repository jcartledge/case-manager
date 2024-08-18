import test from "ava";

import { SnakeCaseString, snakeCaseStringBuilder } from "..";

test("behaves like toSnakeCase with no prefix supplied", (t) => {
  const builder = snakeCaseStringBuilder();
  t.is(builder("some", "string"), "some_string" as SnakeCaseString);
});

test("prepends the prefix if it's supplied", (t) => {
  const builder = snakeCaseStringBuilder("some", "prefix");
  t.is(builder("some", "string"), "some_prefix_some_string" as SnakeCaseString);
});
