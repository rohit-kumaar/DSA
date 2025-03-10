// Doubly Linked List Class using JS built-in methods
class DoublyLinkedList {
  constructor() {
    this.list = [];
  }

  // 1️⃣ Insert at the beginning (prepend)
  prepend(data) {
    this.list.unshift(data);
  }

  // 2️⃣ Insert at the end (append)
  append(data) {
    this.list.push(data);
  }

  // 3️⃣ Delete a node by value
  deleteByValue(value) {
    this.list = this.list.filter((item) => item !== value);
  }

  // 4️⃣ Traverse using 'next' (like forward)
  displayNext() {
    return this.list.join(" ⇄ ") + " ⇄ NULL";
  }

  // 5️⃣ Traverse using 'previous' (like backward)
  displayPrevious() {
    return this.list.slice().reverse().join(" ⇄ ") + " ⇄ NULL";
  }
}

// Usage Example:
let dll = new DoublyLinkedList();
dll.append(10);
dll.append(20);
dll.append(30);

console.log(dll.displayNext());
// Output: 10 ⇄ 20 ⇄ 30 ⇄ NULL

console.log(dll.displayPrevious());
// Output: 30 ⇄ 20 ⇄ 10 ⇄ NULL

dll.prepend(5);
console.log(dll.displayNext());
// Output: 5 ⇄ 10 ⇄ 20 ⇄ 30 ⇄ NULL

dll.deleteByValue(20);
console.log(dll.displayNext());
// Output: 5 ⇄ 10 ⇄ 30 ⇄ NULL
