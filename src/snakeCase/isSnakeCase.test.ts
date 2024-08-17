import test from "ava";
import { booleanTitleTestHelpers } from "../common/testHelpers/booleanTitleTestHelpers";
import { isSnakeCase } from "..";

const { yes, no } = booleanTitleTestHelpers(isSnakeCase);

test("is_snake_case", yes);
test("is-snake-case", no);
test("issnakecase", yes);
test("IsSnakeCase", no);
test("isSnakeCase", no);
test("is-snakeCase", no);
test("is-snake_case", no);
test("Is snake Case", no);

