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

it("n = 2, reservedSeats = [[2,1],[1,8],[2,6]] is 2", () => {
  assert.equal(
    maxNumberOfFamilies(2, [
      [2, 1],
      [1, 8],
      [2, 6],
    ]),
    2
  );
});

it("n = 4, reservedSeats = [[4,3],[1,4],[4,6],[1,7]] is 4", () => {
  assert.equal(
    maxNumberOfFamilies(4, [
      [4, 3],
      [1, 4],
      [4, 6],
      [1, 7],
    ]),
    4
  );
});
