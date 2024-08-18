import test from "ava";

import { lcfirst } from ".";

test("lower case input", (t) => t.is(lcfirst("abcde"), "abcde"));
test("upper case input", (t) => t.is(lcfirst("ABCDE"), "aBCDE"));
test("mixed case input", (t) => t.is(lcfirst("AbCdE"), "abCdE"));
test("empty input", (t) => t.is(lcfirst(""), ""));
test("numeric input", (t) => t.is(lcfirst("12345"), "12345"));
