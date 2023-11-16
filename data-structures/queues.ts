// we implement queues using arrays

interface IQueue<T> {
  enqueue(data: T): void;
  dequeue(): T | void;
  front(): T | null;
  size(): number;
  empty(): boolean;
}

class Queue<T> implements IQueue<T> {
  private storage: T[];
  private capacity: number;

  constructor() {
    this.storage = [];
    this.capacity = Infinity;
  }

  public size(): number {
    return this.storage.length;
  }

  public enqueue(data: T): void {
    if (this.size() === this.capacity) {
      throw new Error("Queue has reached maximum capacity!");
    }

    this.storage.push(data);
  }

  public dequeue(): T | void {
    if (this.size() === 0) {
      throw new Error("Queue is empty!");
    }

    return this.storage.shift();
  }

  public front(): T | null {
    if (this.size() === 0) {
      return null;
    }

    return this.storage[0];
  }

  public empty(): boolean {
    return this.storage.length === 0;
  }
}

export default Queue;
