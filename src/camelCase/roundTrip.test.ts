import test from "ava";

import { isCamelCase, toCamelCase } from "..";

test.failing("empty string", (t) => {
  const converted = toCamelCase("");
  t.true(isCamelCase(converted));
});
