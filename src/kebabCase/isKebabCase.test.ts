import test from "ava";
import { booleanTitleTestHelpers } from "../common/testHelpers/booleanTitleTestHelpers";
import { isKebabCase } from "./isKebabCase";

const { yes, no } = booleanTitleTestHelpers(isKebabCase);

test("is-kebab-case", yes);
test("IsKebabCase", no);
test("isKebabCase", no);
test("is-kebabCase", no);
test("is-kebab_case", no);
test("Is kebab Case", no);
