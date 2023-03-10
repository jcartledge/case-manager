import test from "ava";
import { stringTitleTestHelpers } from "../common/testHelpers/booleanTitleTestHelpers";
import { toTitleCase } from "./toTitleCase";

const { is: isToTitleCase } = stringTitleTestHelpers(toTitleCase);

test("From sentence case", isToTitleCase("From Sentence Case"));
test("from_snake_case", isToTitleCase("From Snake Case"));
test("from-kebab-case", isToTitleCase("From Kebab Case"));
test("fromCamelCase", isToTitleCase("From Camel Case"));
test("FromPascalCase", isToTitleCase("From Pascal Case"));
