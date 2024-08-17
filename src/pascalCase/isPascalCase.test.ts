import test from "ava";
import { booleanTitleTestHelpers } from "../common/testHelpers/booleanTitleTestHelpers";
import { isPascalCase } from "..";

const { yes, no } = booleanTitleTestHelpers(isPascalCase);

test("IsPascalCase", yes);

test("Is pascal Case", no);
test("is-pascal_case", no);
test("isPascalCase", no);
test("IsPAScalCase", no);
test("ISPascalCase", no);
