import test from "ava";

import { TitleCaseString, titleCaseStringBuilder } from "..";

test("behaves like toTitleCase with no prefix supplied", (t) => {
  const builder = titleCaseStringBuilder();
  t.is(builder("some", "string"), "Some String" as TitleCaseString);
});

test("prepends the prefix if it's supplied", (t) => {
  const builder = titleCaseStringBuilder("some", "prefix");
  t.is(builder("some", "string"), "Some Prefix Some String" as TitleCaseString);
});
