import test from "ava";

import { isSnakeCase } from "..";
import { booleanTitleTestHelpers } from "../common/testHelpers/booleanTitleTestHelpers";

const { yes, no } = booleanTitleTestHelpers(isSnakeCase);

test("is_snake_case", yes);
test("is-snake-case", no);
test("issnakecase", yes);
test("IsSnakeCase", no);
test("isSnakeCase", no);
test("is-snakeCase", no);
test("is-snake_case", no);
test("Is snake Case", no);
test("empty string", (t) => t.false(isSnakeCase("")));
