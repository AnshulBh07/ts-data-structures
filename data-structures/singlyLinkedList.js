// there are two types of Linked Lists, Doubly and singly
// first create a generic class to define a node
// this is the same as defining a struct in c++
var ListNode = /** @class */ (function () {
    function ListNode(data) {
        this.data = data;
        this.next = null;
    }
    return ListNode;
}());
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        // declare head as private
        this.head = null;
    }
    SinglyLinkedList.prototype.insertAtBegin = function (data) {
        var newNode = new ListNode(data);
        // if the head is null we assign the newNode as head
        if (!this.head) {
            this.head = newNode;
            return;
        }
        // if the head is not null, insert before head
        newNode.next = this.head;
        this.head = newNode;
    };
    SinglyLinkedList.prototype.insertAtEnd = function (data) {
        var newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        var temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = newNode;
    };
    SinglyLinkedList.prototype.deleteFromBeg = function () {
        if (!this.head) {
            return this.head;
        }
        var temp = this.head;
        this.head = temp.next;
        temp.next = null;
        return temp;
    };
    SinglyLinkedList.prototype.deleteFromEnd = function () {
        if (!this.head || this.head.next === null) {
            return this.head;
        }
        var temp = this.head;
        while (temp.next.next != null) {
            temp = temp.next;
        }
        temp.next = null;
        return temp.next;
    };
    SinglyLinkedList.prototype.getLength = function (head) {
        if (!this.head) {
            return 0;
        }
        var len = 0;
        var temp = this.head;
        while (temp) {
            len++;
            temp = temp.next;
        }
        return len;
    };
    SinglyLinkedList.prototype.printList = function () {
        if (!this.head) {
            return;
        }
        var temp = this.head;
        while (temp) {
            console.log(temp.data + "->");
            temp = temp.next;
        }
    };
    return SinglyLinkedList;
}());
var sll = new SinglyLinkedList();
sll.printList();
sll.insertAtBegin(8);
sll.printList();
