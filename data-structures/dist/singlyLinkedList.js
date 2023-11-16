"use strict";
// there are two types of Linked Lists, Doubly and singly
// first create a generic class to define a node
// this is the same as defining a struct in c++
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        // declare head as private
        this.head = null;
    }
    insertAtBegin(data) {
        const newNode = new ListNode(data);
        // if the head is null we assign the newNode as head
        if (!this.head) {
            this.head = newNode;
            return;
        }
        // if the head is not null, insert before head
        newNode.next = this.head;
        this.head = newNode;
    }
    insertAtEnd(data) {
        const newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = newNode;
    }
    deleteFromBeg() {
        if (!this.head) {
            return this.head;
        }
        const temp = this.head;
        this.head = temp.next;
        temp.next = null;
        return temp;
    }
    deleteFromEnd() {
        if (!this.head || this.head.next === null) {
            return this.head;
        }
        let temp = this.head;
        while (temp.next.next != null) {
            temp = temp.next;
        }
        let temp2 = temp.next;
        temp.next = null;
        return temp2;
    }
    getLength() {
        if (!this.head) {
            return 0;
        }
        let len = 0;
        let temp = this.head;
        while (temp) {
            len++;
            temp = temp.next;
        }
        return len;
    }
    printList() {
        if (!this.head) {
            return;
        }
        let temp = this.head;
        let list = "";
        while (temp) {
            list += temp.data + "->";
            temp = temp.next;
        }
        console.log(list);
    }
}
const sll = new SinglyLinkedList();
sll.insertAtBegin(8);
sll.insertAtBegin(2);
sll.insertAtBegin(7);
sll.insertAtEnd(9);
sll.insertAtBegin(11);
sll.insertAtEnd(45);
console.log(sll.deleteFromBeg());
sll.printList();
console.log(sll.deleteFromEnd());
sll.printList();
console.log("Length of list is : " + sll.getLength());
