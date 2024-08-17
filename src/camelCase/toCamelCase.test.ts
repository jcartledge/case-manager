import test from "ava";
import { stringTitleTestHelpers } from "../common/testHelpers/booleanTitleTestHelpers";
import { toCamelCase, CamelCaseString } from "..";

const { is: toCamelCaseIs } = stringTitleTestHelpers(toCamelCase);

test("From sentence case", toCamelCaseIs("fromSentenceCase"));
test("From Title Case", toCamelCaseIs("fromTitleCase"));
test("from_snake_case", toCamelCaseIs("fromSnakeCase"));
test("from-kebab-case", toCamelCaseIs("fromKebabCase"));
test("FromPascalCase", toCamelCaseIs("fromPascalCase"));
test("multiple inputs", (t) => {
  t.is(
    toCamelCase("something", "something else"),
    "somethingSomethingElse" as CamelCaseString,
  );
});
