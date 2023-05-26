import assert from "node:assert/strict";
import { it } from "node:test";
import { maxSubArray } from "./solution";

it("[-2,1,-3,4,-1,2,1,-5,4] is 6", () => {
  assert.strictEqual(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
});

it("[1] is 1", () => {
  assert.strictEqual(maxSubArray([1]), 1);
});

it("[5,4,-1,7,8] is 23", () => {
  assert.strictEqual(maxSubArray([5, 4, -1, 7, 8]), 23);
});
