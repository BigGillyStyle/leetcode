import assert from "node:assert/strict";
import { it } from "node:test";
import { rotateTheBox } from "./solution";

it('[["#",".","#"]] is [["."], ["#"], ["#"]]', () => {
  assert.deepEqual(rotateTheBox([["#", ".", "#"]]), [["."], ["#"], ["#"]]);
});

it('[["#",".","*","."],["#","#","*","."]] is [["#","."],["#","#"],["*","*"],[".","."]]', () => {
  assert.deepEqual(
    rotateTheBox([
      ["#", ".", "*", "."],
      ["#", "#", "*", "."],
    ]),
    [
      ["#", "."],
      ["#", "#"],
      ["*", "*"],
      [".", "."],
    ]
  );
});
