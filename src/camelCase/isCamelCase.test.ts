import test from "ava";
import { booleanTitleTestHelpers } from "../common/testHelpers/booleanTitleTestHelpers";
import { isCamelCase } from "./isCamelCase";

const { yes, no } = booleanTitleTestHelpers(isCamelCase);

test("isCamelCase", yes);
test("IsCamelCase", no);
test("ISCamelCase", no);
test("IsCAMelCase", no);
test("is-camel_case", no);
test("Is camel Case", no);
