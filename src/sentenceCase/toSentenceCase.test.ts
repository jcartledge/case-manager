import test from "ava";
import { stringTitleTestHelpers } from "../common/testHelpers/booleanTitleTestHelpers";
import { toSentenceCase } from "./toSentenceCase";

const { is: toSentenceCaseIs } = stringTitleTestHelpers(toSentenceCase);

test("FromPascalCase", toSentenceCaseIs("From pascal case"));
test("from-kebab-case", toSentenceCaseIs("From kebab case"));
test("fromCamelCase", toSentenceCaseIs("From camel case"));
test("From snake case", toSentenceCaseIs("From snake case"));
test("From Title Case", toSentenceCaseIs("From title case"));
