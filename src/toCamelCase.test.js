"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const toCamelCase_1 = require("./toCamelCase");
(0, ava_1.default)("from_snake_case", (t) => {
    t.is((0, toCamelCase_1.toCamelCase)("from_snake_case"), "fromSnakeCase");
});
