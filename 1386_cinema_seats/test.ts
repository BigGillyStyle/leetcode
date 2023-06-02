import assert from "node:assert/strict";
import { it } from "node:test";
import { maxNumberOfFamilies } from "./solution";

it("n = 3, reservedSeats = [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]] is 4", () => {
  assert.equal(
    maxNumberOfFamilies(3, [
      [1, 2],
      [1, 3],
      [1, 8],
      [2, 6],
      [3, 1],
      [3, 10],
    ]),
    4
  );
});
