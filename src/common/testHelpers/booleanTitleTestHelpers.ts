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
