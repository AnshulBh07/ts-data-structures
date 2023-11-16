"use strict";
// we implement queues using arrays
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor() {
        this.storage = [];
        this.capacity = Infinity;
    }
    size() {
        return this.storage.length;
    }
    enqueue(data) {
        if (this.size() === this.capacity) {
            throw new Error("Queue has reached maximum capacity!");
        }
        this.storage.push(data);
    }
    dequeue() {
        if (this.size() === 0) {
            throw new Error("Queue is empty!");
        }
        return this.storage.shift();
    }
    front() {
        if (this.size() === 0) {
            return null;
        }
        return this.storage[0];
    }
    empty() {
        return this.storage.length === 0;
    }
}
exports.default = Queue;
