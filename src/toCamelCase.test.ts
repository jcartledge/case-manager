import test from "ava";
import { toCamelCase } from "./toCamelCase";

test("from_snake_case", (t) => {
  t.is(toCamelCase("from_snake_case"), "fromSnakeCase");
});
