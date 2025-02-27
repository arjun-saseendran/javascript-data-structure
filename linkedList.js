// Create empty node.
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Create linked list.
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node.
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node.
  insertLast(data) {
    let node = new Node(data);
    let current;

    // If empty, set head.
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // insert at index.
  insertAt(data, index) {
    // Handle if index is out of range
    if (index > 0 && index > this.size) return;

    // If first index.
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to first.
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index.
      count++;
      current = current.next; // Node after index.
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }
  // Get at index.
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }
  // Remove at index.
  removeAt(index) {
    if (index > 0 && index > this.size) return;
    let current = this.head;
    let previous;
    let count = 0;

    // Remove first.
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  // Clear list.
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print list data.
  printListData() {
    if(!this.head) conslolel.
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Create linked list.
const linkedList = new LinkedList();

linkedList.insertFirst(100);
linkedList.insertFirst(200);
linkedList.insertFirst(300);
linkedList.insertLast(400);
linkedList.insertAt(500, 2);
linkedList.removeAt(1);
linkedList.getAt(2);
linkedList.clearList();
linkedList.printListData();
