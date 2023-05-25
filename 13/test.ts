import assert from "node:assert/strict";
import test from "node:test";
import { romanToInt } from "./solution";

test("3 is III", () => {
  assert.strictEqual(romanToInt("III"), 3);
});

test("LVIII is 58", () => {
  assert.strictEqual(romanToInt("LVIII"), 58);
});
