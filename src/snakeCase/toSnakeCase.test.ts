import test from "ava";
import { stringTitleTestHelpers } from "../common/testHelpers/booleanTitleTestHelpers";
import { toSnakeCase } from "./toSnakeCase";

const { is: isToSnakeCase } = stringTitleTestHelpers(toSnakeCase);

test("From sentence case", isToSnakeCase("from_sentence_case"));
test("From Title Case", isToSnakeCase("from_title_case"));
test("from-kebab-case", isToSnakeCase("from_kebab_case"));
test("fromCamelCase", isToSnakeCase("from_camel_case"));
test("FromPascalCase", isToSnakeCase("from_pascal_case"));
