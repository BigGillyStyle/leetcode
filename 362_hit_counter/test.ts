import assert from "node:assert/strict";
import { it } from "node:test";
import { HitCounter } from "./solution";

it("1 hit", () => {
  const obj = new HitCounter();
  obj.hit(1);
  assert.equal(obj.getHits(2), 1);
});

it("2 hits", () => {
  const obj = new HitCounter();
  obj.hit(1);
  obj.hit(1);
  assert.equal(obj.getHits(2), 2);
});

it("multiple hits", () => {
  const obj = new HitCounter();
  obj.hit(1);
  obj.hit(2);
  obj.hit(3);
  assert.equal(obj.getHits(4), 3);
  obj.hit(300);
  assert.equal(obj.getHits(300), 4);
  assert.equal(obj.getHits(301), 3);
});
