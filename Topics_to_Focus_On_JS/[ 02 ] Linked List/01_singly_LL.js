/*

// LinkedList class
class LinkedList {
  constructor() {
    this.list = []; // Using a array to store elements;
  }

  // 1️⃣ Insert at the beginning (prepend)
  prepend(data) {
    this.list.unshift(data);
  }

  // 2️⃣ Insert at the end (append)
  append(data) {
    this.list.push(data);
  }

  // 3️⃣ Insert at a specific position
  insertAt(data, position) {
    this.list.splice(position, 0, data);
  }

  // 4️⃣ Delete a node by value
  deleteByValue(value) {
    this.list = this.list.filter((item) => item !== value);
  }

  // 5️⃣ Delete a node by position
  deleteAt(position) {
    this.list.splice(position, 1);
  }

  // 6️⃣ Search for a value (return index)
  search(value) {
    return this.list.indexOf(value);
  }

  // 7️⃣  Reverse the linked list
  reverse() {
    this.list.reverse();
  }

  // 8️⃣ Display all nodes
  display() {
    return this.list.join(" ➡ ") + " ➡ NULL";
  }
}

const list = new LinkedList();
list.prepend(20);
list.prepend(10);
console.log(list.display());

list.append(30);
list.append(40);
console.log(list.display());

list.insertAt(15, 2);
console.log(list.display());

list.deleteByValue(15);
console.log(list.display());

list.deleteAt(2);
console.log(list.display());

console.log(list.search(20));

list.reverse();
console.log(list.display());

*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.size++;
  }

  printList() {
    let current = this.head;
    let result = "";
    console.log(current);

    while (current) {
      result = result + current.data + " --> ";
      current = current.next;
    }

    return result + "null";
  }
}

const list = new SinglyLinkedList();
list.append(10);
// list.append(20);
console.log(list.printList());
