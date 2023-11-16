"use strict";
class DListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
    }
    insertAtEnd(data) {
        const newNode = new DListNode(data);
        if (!this.head) {
            this.head = newNode;
        }
        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        temp.next = newNode;
        newNode.prev = temp;
    }
    insertAtBeg(data) {
        const newNode = new DListNode(data);
        if (!this.head) {
            this.head = newNode;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
    }
    deleteFromBeg() {
        if (!this.head || this.head.next === null) {
            return this.head;
        }
        let temp = this.head;
        this.head = temp.next;
        temp.next = null;
        this.head.prev = null;
        return temp;
    }
    deleteFromEnd() {
        if (!this.head || this.head.next === null) {
            return this.head;
        }
        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        temp.prev.next = null;
        temp.prev = null;
        return temp;
    }
    printList() {
        if (!this.head) {
            return;
        }
        let temp = this.head;
        let list = "";
        while (temp) {
            list += temp.data + "<->";
            temp = temp.next;
        }
        console.log(list);
    }
    getLength() {
        if (!this.head) {
            return 0;
        }
        let temp = this.head;
        let len = 0;
        while (temp) {
            len++;
            temp = temp.next;
        }
        return len;
    }
}
const dll = new DoublyLinkedList();
dll.insertAtBeg(1);
dll.printList();
