import test from "ava";

import { SentenceCaseString, toSentenceCase } from "..";
import { stringTitleTestHelpers } from "../common/testHelpers/booleanTitleTestHelpers";

const { is: toSentenceCaseIs } = stringTitleTestHelpers(toSentenceCase);

test("From Title Case", toSentenceCaseIs("From title case"));
test("from_snake_case", toSentenceCaseIs("From snake case"));
test("from-kebab-case", toSentenceCaseIs("From kebab case"));
test("fromCamelCase", toSentenceCaseIs("From camel case"));
test("FromPascalCase", toSentenceCaseIs("From pascal case"));
test("multiple inputs", (t) => {
  t.is(
    toSentenceCase("something", "something else"),
    "Something something else" as SentenceCaseString,
  );
});
