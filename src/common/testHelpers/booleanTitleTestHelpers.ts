import { ExecutionContext } from "ava";

export const booleanTitleTestHelpers = (
  functionToTest: (arg0: string) => boolean
) => ({
  yes: (t: ExecutionContext) => {
    t.is(functionToTest(t.title), true);
  },
  no: (t: ExecutionContext) => {
    t.is(functionToTest(t.title), false);
  },
});

export const stringTitleTestHelpers = (
  functionToTest: (arg0: string) => string
) => ({
  is: (expected: string) => (t: ExecutionContext) => {
    t.is(functionToTest(t.title), expected);
  },
});
