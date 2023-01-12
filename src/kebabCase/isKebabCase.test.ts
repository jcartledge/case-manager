import test, { ExecutionContext } from "ava";
import { isKebabCase } from "./isKebabCase";

const yes = (t: ExecutionContext) => {
  t.is(isKebabCase(t.title), true);
};

const no = (t: ExecutionContext) => {
  t.is(isKebabCase(t.title), false);
};

test("is-kebab-case", yes);
test("IsKebabCase", no);
test("isKebabCase", no);
test("is-kebabCase", no);
test("is-kebab_case", no);
test("Is kebab Case", no);
