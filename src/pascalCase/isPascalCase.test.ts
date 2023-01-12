import test, { ExecutionContext } from "ava";
import { isPascalCase } from "./isPascalCase";

const yes = (t: ExecutionContext) => {
  t.is(isPascalCase(t.title), true);
};

const no = (t: ExecutionContext) => {
  t.is(isPascalCase(t.title), false);
};

test("IsPascalCase", yes);
test("isPascalCase", no);
test("ISPascalCase", no);
test("IsPAScalCase", no);
test("is-pascal_case", no);
test("Is pascal Case", no);
