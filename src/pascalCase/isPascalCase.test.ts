import test from "ava";
import { booleanTitleTestHelpers } from "../common/testHelpers/booleanTitleTestHelpers";
import { isPascalCase } from "./isPascalCase";

const { yes, no } = booleanTitleTestHelpers(isPascalCase);

test("IsPascalCase", yes);
test("isPascalCase", no);
test("ISPascalCase", no);
test("IsPAScalCase", no);
test("is-pascal_case", no);
test("Is pascal Case", no);
