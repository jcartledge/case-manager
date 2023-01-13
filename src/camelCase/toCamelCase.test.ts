import test from "ava";
import { stringTitleTestHelpers } from "../common/testHelpers/booleanTitleTestHelpers";
import { toCamelCase } from "./toCamelCase";

const { is: toCamelCaseIs } = stringTitleTestHelpers(toCamelCase);

test("from_snake_case", toCamelCaseIs("fromSnakeCase"));
test("from-kebab-case", toCamelCaseIs("fromKebabCase"));
test("FromPascalCase", toCamelCaseIs("fromPascalCase"));
test("From sentence case", toCamelCaseIs("fromSentenceCase"));
test("From Title Case", toCamelCaseIs("fromTitleCase"));
