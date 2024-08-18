import test from "ava";

import { isKebabCase } from "..";
import { booleanTitleTestHelpers } from "../common/testHelpers/booleanTitleTestHelpers";

const { yes, no } = booleanTitleTestHelpers(isKebabCase);

test("is-kebab-case", yes);
test("iskebabcase", yes);
test("IsKebabCase", no);
test("isKebabCase", no);
test("is-kebabCase", no);
test("is-kebab_case", no);
test("Is kebab Case", no);
test("empty string", (t) => t.false(isKebabCase("")));
