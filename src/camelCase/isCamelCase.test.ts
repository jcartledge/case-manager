import test from "ava";

import { isCamelCase } from "..";
import { booleanTitleTestHelpers } from "../common/testHelpers/booleanTitleTestHelpers";

const { yes, no } = booleanTitleTestHelpers(isCamelCase);

test("isCamelCase", yes);

test("Is camel Case", no);
test("is-camel_case", no);
test("IsCamelCase", no);
test("IsCAMelCase", no);
test("ISCamelCase", no);
test("empty string", (t) => t.false(isCamelCase("")));
