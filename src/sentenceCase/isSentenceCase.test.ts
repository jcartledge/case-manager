import test from "ava";
import { booleanTitleTestHelpers } from "../common/testHelpers/booleanTitleTestHelpers";
import { isSentenceCase } from "./isSentenceCase";

const { yes, no } = booleanTitleTestHelpers(isSentenceCase);

test("Is sentence case", yes);

test("is sentence case", no);
test("IS SENTENCE CASE", no);
test("Is sENTence case", no);
test("Is Sentence Case", no);
test("is-sentence_case", no);
test("isSentenceCase", no);
