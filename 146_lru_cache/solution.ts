export class LRUCache {
  private nodes = new Map<number, number>();

  constructor(private capacity: number) {}

  get(key: number): number {
    if (!this.nodes.has(key)) {
      return -1;
    }

    const value = this.nodes.get(key) as number;
    this.nodes.delete(key);
    this.nodes.set(key, value);

    return value;
  }

  put(key: number, value: number): void {
    this.nodes.delete(key);
    this.nodes.set(key, value);

    if (this.nodes.size > this.capacity) {
      const firstKey = this.nodes.keys().next().value;
      this.nodes.delete(firstKey);
    }
  }
}
