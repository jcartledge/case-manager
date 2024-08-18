import test from "ava";

import { isPascalCase } from "..";
import { booleanTitleTestHelpers } from "../common/testHelpers/booleanTitleTestHelpers";

const { yes, no } = booleanTitleTestHelpers(isPascalCase);

test("IsPascalCase", yes);

test("Is pascal Case", no);
test("is-pascal_case", no);
test("isPascalCase", no);
test("IsPAScalCase", no);
test("ISPascalCase", no);
test("empty string", (t) => t.false(isPascalCase("")));
