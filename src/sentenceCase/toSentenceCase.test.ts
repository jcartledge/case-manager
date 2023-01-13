import test from "ava";
import { stringTitleTestHelpers } from "../common/testHelpers/booleanTitleTestHelpers";
import { toSentenceCase } from "./toSentenceCase";

const { is: toSentenceCaseIs } = stringTitleTestHelpers(toSentenceCase);

test("From Title Case", toSentenceCaseIs("From title case"));
test("from_snake_case", toSentenceCaseIs("From snake case"));
test("from-kebab-case", toSentenceCaseIs("From kebab case"));
test("fromCamelCase", toSentenceCaseIs("From camel case"));
test("FromPascalCase", toSentenceCaseIs("From pascal case"));
