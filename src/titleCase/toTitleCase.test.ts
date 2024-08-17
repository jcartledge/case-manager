import test from "ava";
import { stringTitleTestHelpers } from "../common/testHelpers/booleanTitleTestHelpers";
import { TitleCaseString, toTitleCase } from ".";

const { is: isToTitleCase } = stringTitleTestHelpers(toTitleCase);

test("From sentence case", isToTitleCase("From Sentence Case"));
test("from_snake_case", isToTitleCase("From Snake Case"));
test("from-kebab-case", isToTitleCase("From Kebab Case"));
test("fromCamelCase", isToTitleCase("From Camel Case"));
test("FromPascalCase", isToTitleCase("From Pascal Case"));
test("multiple inputs", (t) => {
  t.is(toTitleCase("something", "something else"), "Something Something Else" as TitleCaseString)
})
