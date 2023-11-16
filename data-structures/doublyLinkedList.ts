class DListNode<T> {
  data: T;
  next: DListNode<T> | null;
  prev: DListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

interface IDoublyLinkedList<T> {
  insertAtBeg(data: T): void;
  insertAtEnd(data: T): void;
  deleteFromBeg(): DListNode<T> | null;
  deleteFromEnd(): DListNode<T> | null;
  getLength(): number;
  printList(): void;
}

class DoublyLinkedList<T> implements IDoublyLinkedList<T> {
  private head: DListNode<T> | null = null;

  public insertAtEnd(data: T): void {
    const newNode = new DListNode(data);

    if (!this.head) {
      this.head = newNode;
    }

    let temp = this.head;

    while (temp.next) {
      temp = temp!.next;
    }

    temp.next = newNode;
    newNode.prev = temp;
  }

  public insertAtBeg(data: T): void {
    const newNode = new DListNode(data);

    if (!this.head) {
      this.head = newNode;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
  }

  public deleteFromBeg(): DListNode<T> | null {
    if (!this.head || this.head.next === null) {
      return this.head;
    }

    let temp = this.head;

    this.head = temp.next;
    temp.next = null;
    this.head!.prev = null;

    return temp;
  }

  public deleteFromEnd(): DListNode<T> | null {
    if (!this.head || this.head.next === null) {
      return this.head;
    }

    let temp = this.head;

    while (temp.next) {
      temp = temp.next;
    }

    temp.prev!.next = null;
    temp.prev = null;

    return temp;
  }

  public printList(): void {
    if (!this.head) {
      return;
    }

    let temp: DListNode<T> | null = this.head;
    let list = "";

    while (temp) {
      list += temp.data + "<->";
      temp = temp.next;
    }

    console.log(list);
  }

  public getLength(): number {
    if (!this.head) {
      return 0;
    }

    let temp: DListNode<T> | null = this.head;
    let len = 0;

    while (temp) {
      len++;
      temp = temp.next;
    }
    return len;
  }
}

const dll = new DoublyLinkedList<number>();

dll.insertAtBeg(1);

dll.printList();
