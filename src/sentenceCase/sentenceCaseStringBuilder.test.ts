import test from "ava";

import { SentenceCaseString, sentenceCaseStringBuilder } from "..";

test("behaves like toSentenceCase with no prefix supplied", (t) => {
  const builder = sentenceCaseStringBuilder();
  t.is(builder("some", "string"), "Some string" as SentenceCaseString);
});

test("prepends the prefix if it's supplied", (t) => {
  const builder = sentenceCaseStringBuilder("some", "prefix");
  t.is(
    builder("some", "string"),
    "Some prefix some string" as SentenceCaseString,
  );
});
