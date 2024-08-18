import test from "ava";

import { KebabCaseString, toKebabCase } from "..";
import { stringTitleTestHelpers } from "../common/testHelpers/booleanTitleTestHelpers";

const { is: toKebabCaseIs } = stringTitleTestHelpers(toKebabCase);

test("FromPascalCase", toKebabCaseIs("from-pascal-case"));
test("from_snake_case", toKebabCaseIs("from-snake-case"));
test("fromCamelCase", toKebabCaseIs("from-camel-case"));
test("From sentence case", toKebabCaseIs("from-sentence-case"));
test("From Title Case", toKebabCaseIs("from-title-case"));
test("multiple inputs", (t) => {
  t.is(
    toKebabCase("something", "something else"),
    "something-something-else" as KebabCaseString,
  );
});
