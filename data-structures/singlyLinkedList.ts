// there are two types of Linked Lists, Doubly and singly
// first create a generic class to define a node
// this is the same as defining a struct in c++
class ListNode<T> {
  data: T;
  next: ListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

// generic interface
interface ISinglyLinkedList<T> {
  // this is the bone structure for our object / class for singly linked list
  insertAtBegin(data: T): void;
  insertAtEnd(data: T): void;
  deleteFromBeg(): ListNode<T> | null;
  deleteFromEnd(): ListNode<T> | null;
  printList(): void;
  getLength(): number;
}

class SinglyLinkedList<T> implements ISinglyLinkedList<T> {
  // declare head as private
  private head: ListNode<T> | null = null;

  public insertAtBegin(data: T): void {
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

  public insertAtEnd(data: T): void {
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

  public deleteFromBeg(): ListNode<T> | null {
    if (!this.head) {
      return this.head;
    }

    const temp = this.head;
    this.head = temp.next;
    temp.next = null;

    return temp;
  }

  public deleteFromEnd(): ListNode<T> | null {
    if (!this.head || this.head.next === null) {
      return this.head;
    }

    let temp: ListNode<T> | null = this.head;

    while (temp!.next!.next != null) {
      temp = temp!.next;
    }

    let temp2: ListNode<T> | null = temp!.next;

    temp!.next = null;

    return temp2;
  }

  public getLength(): number {
    if (!this.head) {
      return 0;
    }

    let len = 0;
    let temp: ListNode<T> | null = this.head;

    while (temp) {
      len++;
      temp = temp.next;
    }

    return len;
  }

  public printList(): void {
    if (!this.head) {
      return;
    }

    let temp: ListNode<T> | null = this.head;
    let list: string = "";

    while (temp) {
      list += temp.data + "->";
      temp = temp.next;
    }

    console.log(list);
  }
}

const sll = new SinglyLinkedList<number>();

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
