export class HitCounter {
  private counter = new Map<number, number>();
  constructor() {}

  hit(timestamp: number): void {
    if (this.counter.has(timestamp)) {
      // timestamp already has at least one hit
      const hits = this.counter.get(timestamp) as number;
      this.counter.set(timestamp, hits + 1);
    } else {
      // counter has no hits at this timestamp
      this.counter.set(timestamp, 1);
    }
  }

  getHits(timestamp: number): number {
    const counterEntries = Array.from(this.counter.entries());

    let totalHits = 0;

    for (let index = 0; index < counterEntries.length; index++) {
      const [entryTimestamp, hits] = counterEntries[index];
      if (entryTimestamp > timestamp) {
        break;
      } else if (entryTimestamp < timestamp - 299) {
        continue;
      }
      totalHits = totalHits + hits;
    }
    return totalHits;
  }
}

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
