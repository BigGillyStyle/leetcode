class Node {
  next!: Node;
  prev!: Node;

  constructor(public key: number, public val: number) {}
}

export class LRUCache {
  private nodes = new Map<number, Node>();
  private head = new Node(-1, -1);
  private tail = new Node(-1, -1);

  constructor(private capacity: number) {
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    if (!this.nodes.has(key)) {
      return -1;
    }

    const node = this.nodes.get(key) as Node;
    this.remove(node);
    this.add(node);
    return node.val;
  }

  put(key: number, value: number): void {
    if (this.nodes.has(key)) {
      const node = this.nodes.get(key) as Node;
      this.remove(node);
    }

    const node = new Node(key, value);
    this.nodes.set(key, node);
    this.add(node);

    if (this.nodes.size > this.capacity) {
      const node = this.head.next;
      this.remove(node);
      this.nodes.delete(node.key);
    }
  }

  private add(node: Node) {
    const previousEnd = this.tail.prev;
    previousEnd.next = node;
    node.prev = previousEnd;
    node.next = this.tail;
    this.tail.prev = node;
  }

  private remove(node: Node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
}
