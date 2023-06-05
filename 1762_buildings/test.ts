import assert from "node:assert/strict";
import { it } from "node:test";
import { findBuildings } from "./solution";

it("[4,2,3,1] is [0,2,3]", () => {
  assert.deepEqual(findBuildings([4, 2, 3, 1]), [0, 2, 3]);
});

it("[4,3,2,1] is [0,1,2,3]", () => {
  assert.deepEqual(findBuildings([4, 3, 2, 1]), [0, 1, 2, 3]);
});

it("[1,3,2,4] is [3]", () => {
  assert.deepEqual(findBuildings([1, 3, 2, 4]), [3]);
});
