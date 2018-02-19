class Node {
  constructor(value) {
    this.value = value;
    this.next;
    this.prev;
  }

  delete() {
    if (this.prev) {
      this.prev.next = this.next;
    }
    if (this.next) {
      this.next.prev = this.prev;
    }
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head;
    this.tail;
    this.length = 0;
  }

  push(value) {
    const pushNode = new Node(value);

    if (this.length === 0) {
      this.head = pushNode;
    } else {
      pushNode.prev = this.tail;
      this.tail.next = pushNode;
    }

    this.tail = pushNode;
    this.length++;
  }

  pop() {
    const toPop = this.tail;

    if (this.length > 1) {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    } else {
      this.tail = null;
      this.head = null;
    }
    this.length--;

    return toPop.value;
  }

  shift() {
    const toShift = this.head;
    if (this.length > 1) {
      this.head.next.prev = null;
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;
    return toShift.value;
  }

  unshift(value) {
    const unshiftNode = new Node(value);

    if (this.length === 0) {
      this.tail = unshiftNode;
    } else {
      this.head.prev = unshiftNode;
      unshiftNode.next = this.head;
    }
    this.head = unshiftNode;
    this.length++;
  }

  count() {
    return this.length;
  }

  delete(value) {
    let toDelete = this.head;
    while (toDelete && toDelete.value !== value) {
      toDelete = toDelete.next;
    }
    if (toDelete) {
      this.length--;
      toDelete.delete();
    }
  }
}

module.exports = LinkedList;
