import test from "ava";

import { isTitleCase } from "..";
import { booleanTitleTestHelpers } from "../common/testHelpers/booleanTitleTestHelpers";

const { yes, no } = booleanTitleTestHelpers(isTitleCase);

test("Is Title Case", yes);

test("is title case", no);
test("IS title CASE", no);
test("Is title case", no);
test("Is title Case", no);
test("is-title_case", no);
test("isTitleCase", no);
test("empty string", (t) => t.false(isTitleCase("")));
