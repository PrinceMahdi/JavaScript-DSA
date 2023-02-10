// One implemenetation of a linked list
class LinkedList {
  constructor() {
    this.head = null; // First element of the list
    this.tail = null; // Last element of the list
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: this.head,
    };
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);

    if (existingNode) {
      const newNode = {
        value: value,
        next: existingNode.next,
      };
      existingNode.next = newNode;
    }
  }

  find(value) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  delete(value) {
    if (!this.head) {
      return null;
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    // If the last node is to be deleted then we need to update the tail
    if (this.tail.value === value) {
      this.tail = currentNode;
    }
  }

  toArray() {
    const elements = [];

    let currentNode = this.head;
    while (currentNode) {
      elements.push(currentNode);
      currentNode = currentNode.next;
    }
    return elements;
  }
}

// Testing the linked list
const linkedListOne = new LinkedList();

linkedListOne.append(1);
linkedListOne.append("foo");
linkedListOne.append("bar");
linkedListOne.append(72149);

console.log(linkedListOne.toArray());
/*
[
  { value: 1, next: { value: 'foo', next: [Object] } },
  { value: 'foo', next: { value: 'bar', next: [Object] } },
  { value: 'bar', next: { value: 72149, next: null } },
  { value: 72149, next: null }
]
*/

linkedListOne.prepend("First value!");
console.log(linkedListOne.toArray());
/* 
[
  { value: 'First value!', next: { value: 1, next: [Object] } },
  { value: 1, next: { value: 'foo', next: [Object] } },
  { value: 'foo', next: { value: 'bar', next: [Object] } },
  { value: 'bar', next: { value: 72149, next: null } },
  { value: 72149, next: null }
]
*/

linkedListOne.append("Sarah");
linkedListOne.append("Sarah");
linkedListOne.append("Noel");

linkedListOne.delete("Sarah");
linkedListOne.delete("First value!");
linkedListOne.delete(72149);

console.log(linkedListOne.toArray());
/* 
[
  { value: 1, next: { value: 'foo', next: [Object] } },
  { value: 'foo', next: { value: 'bar', next: [Object] } },
  { value: 'bar', next: { value: 'Noel', next: null } },
  { value: 'Noel', next: null }
]
*/

console.log(linkedListOne.find("Sarah")); // undefined
console.log(linkedListOne.find("foo"));
/* 
{
  value: 'foo',
  next: { value: 'bar', next: { value: 'Noel', next: null } }
}
*/

linkedListOne.insertAfter("this is the new value", "foo");
console.log(linkedListOne.toArray());

/* 
[
  { value: 1, next: { value: 'foo', next: [Object] } },
  {
    value: 'foo',
    next: { value: 'this is the new value', next: [Object] }
  },
  {
    value: 'this is the new value',
    next: { value: 'bar', next: [Object] }
  },
  { value: 'bar', next: { value: 'Noel', next: null } },
  { value: 'Noel', next: null }
]
*/
