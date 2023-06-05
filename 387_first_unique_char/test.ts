import assert from "node:assert/strict";
import { it } from "node:test";
import { firstUniqChar } from "./solution";

it("leetcode is 0", () => {
  assert.deepEqual(firstUniqChar("leetcode"), 0);
});

it("loveleetcode is 2", () => {
  assert.deepEqual(firstUniqChar("loveleetcode"), 2);
});

it("aabb is -1", () => {
  assert.deepEqual(firstUniqChar("aabb"), -1);
});
