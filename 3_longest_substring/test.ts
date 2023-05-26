import assert from "node:assert/strict";
import { it } from "node:test";
import { lengthOfLongestSubstring } from "./solution";

it("abcabcbb is 3", () => {
  assert.strictEqual(lengthOfLongestSubstring("abcabcbb"), 3);
});

it("bbbbb is 1", () => {
  assert.strictEqual(lengthOfLongestSubstring("bbbbb"), 1);
});

it("pwwkew is 3", () => {
  assert.strictEqual(lengthOfLongestSubstring("pwwkew"), 3);
});

it("abba is 2", () => {
  assert.strictEqual(lengthOfLongestSubstring("abba"), 2);
});
