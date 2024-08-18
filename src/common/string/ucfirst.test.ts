import test from "ava";

import { ucfirst } from ".";

test("lower case input", (t) => t.is(ucfirst("abcde"), "Abcde"));
test("upper case input", (t) => t.is(ucfirst("ABCDE"), "ABCDE"));
test("mixed case input", (t) => t.is(ucfirst("aBcDe"), "ABcDe"));
test("empty input", (t) => t.is(ucfirst(""), ""));
test("numeric input", (t) => t.is(ucfirst("12345"), "12345"));
