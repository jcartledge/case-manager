import test from "ava";

import { isSentenceCase } from "..";
import { booleanTitleTestHelpers } from "../common/testHelpers/booleanTitleTestHelpers";

const { yes, no } = booleanTitleTestHelpers(isSentenceCase);

test("Is sentence case", yes);

test("is sentence case", no);
test("IS SENTENCE CASE", no);
test("Is sENTence case", no);
test("Is Sentence Case", no);
test("is-sentence_case", no);
test("isSentenceCase", no);
test("empty string", (t) => t.false(isSentenceCase("")));
