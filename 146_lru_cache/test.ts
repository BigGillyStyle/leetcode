import assert from "node:assert/strict";
import { it } from "node:test";
import { LRUCache } from "./solution";

it("LRUCache supports required operations", () => {
  const lruCache = new LRUCache(2);
  lruCache.put(1, 1);
  lruCache.put(2, 2);
  assert.equal(lruCache.get(1), 1);
  lruCache.put(3, 3);
  assert.equal(lruCache.get(2), -1);
  lruCache.put(4, 4);
  assert.equal(lruCache.get(1), -1);
  assert.equal(lruCache.get(3), 3);
  assert.equal(lruCache.get(4), 4);
});
