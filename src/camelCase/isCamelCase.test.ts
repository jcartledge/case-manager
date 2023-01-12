import test, { ExecutionContext } from "ava";
import { isCamelCase } from "./isCamelCase";

const yes = (t: ExecutionContext) => {
  t.is(isCamelCase(t.title), true);
};

const no = (t: ExecutionContext) => {
  t.is(isCamelCase(t.title), false);
};

test("isCamelCase", yes);
test("IsCamelCase", no);
test("ISCamelCase", no);
test("IsCAMelCase", no);
test("is-camel_case", no);
test("Is camel Case", no);
