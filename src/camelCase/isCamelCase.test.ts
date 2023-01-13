import test from "ava";
import { booleanTitleTestHelpers } from "../common/testHelpers/booleanTitleTestHelpers";
import { isCamelCase } from "./isCamelCase";

const { yes, no } = booleanTitleTestHelpers(isCamelCase);

test("isCamelCase", yes);

test("Is camel Case", no);
test("is-camel_case", no);
test("IsCamelCase", no);
test("IsCAMelCase", no);
test("ISCamelCase", no);
