import test from "ava";
import { stringTitleTestHelpers } from "../common/testHelpers/booleanTitleTestHelpers";
import { toPascalCase } from "./toPascalCase";

const { is: toPascalCaseIs } = stringTitleTestHelpers(toPascalCase);

test("From sentence case", toPascalCaseIs("FromSentenceCase"));
test("From Title Case", toPascalCaseIs("FromTitleCase"));
test("from_snake_case", toPascalCaseIs("FromSnakeCase"));
test("from-kebab-case", toPascalCaseIs("FromKebabCase"));
test("fromCamelCase", toPascalCaseIs("FromCamelCase"));
test("multiple inputs", (t) => {
  t.is(toPascalCase("something", "something else"), "SomethingSomethingElse")
})

