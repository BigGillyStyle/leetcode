import assert from "node:assert/strict";
import { it } from "node:test";
import { validPalindrome } from "./solution";

it("abca is true", () => {
  assert.ok(validPalindrome("abca"));
});
