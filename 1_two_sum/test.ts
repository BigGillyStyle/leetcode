import assert from "node:assert/strict";
import { it } from "node:test";
import { twoSum } from "./solution";

it("nums = [2,7,11,15], target = 9 is [0,1]", () => {
  assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
});

it("nums = [3,2,4], target = 6 is [1, 2]", () => {
  assert.deepEqual(twoSum([3, 2, 4], 6), [1, 2]);
});

it("nums = [3,3], target = 6 is [0, 1]", () => {
  assert.deepEqual(twoSum([3, 3], 6), [0, 1]);
});
