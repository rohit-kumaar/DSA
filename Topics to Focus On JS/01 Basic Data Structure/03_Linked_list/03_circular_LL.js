// Circular Linked List Class using JS built-in methods
class CircularLinkedList {
  constructor() {
    this.list = [];
  }

  // 1️⃣ Insert at the beginning (prepend)
  prepend(data) {
    this.list.unshift(data);
  }

  //2️⃣  Insert at the end (append)
  append(data) {
    this.list.push(data);
  }

  // 3️⃣ Insert at a specific position
  insertAt(data, position) {
    if (position < 0 || position > this.list.length) {
      console.log("Invalid position");
      return;
    }
    this.list.splice(position, 0, data);
  }

  // 4️⃣ Delete a node by value
  deleteByValue(value) {
    this.list = this.list.filter((item) => item !== value);
  }

  // 5️⃣ Delete a node by position
  deleteAt(position) {
    if (position < 0 || position >= this.list.length) {
      console.log("Invalid position");
      return;
    }
    this.list.splice(position, 1);
  }

  // 6️⃣ Search for a value
  search(value) {
    return this.list.indexOf(value); // Returns index or -1 if not found
  }

  // 7️⃣ Reverse the list
  reverse() {
    this.list.reverse();
  }

  // 8️⃣ Display the Circular Linked List
  display() {
    if (this.list.length === 0) {
      return "List is empty";
    }
    return this.list.join(" → ") + " → (Back to Head)";
  }
}

// Usage Example:
let cll = new CircularLinkedList();
cll.append(10);
cll.append(20);
cll.append(30);
console.log(cll.display());
// Output: 10 → 20 → 30 → (Back to Head)

cll.prepend(5);
console.log(cll.display());
// Output: 5 → 10 → 20 → 30 → (Back to Head)

cll.insertAt(15, 2);
console.log(cll.display());
// Output: 5 → 10 → 15 → 20 → 30 → (Back to Head)

cll.deleteByValue(20);
console.log(cll.display());
// Output: 5 → 10 → 15 → 30 → (Back to Head)

console.log("Position of 15:", cll.search(15));
// Output: Position of 15: 2

cll.reverse();
console.log(cll.display());
// Output: 30 → 15 → 10 → 5 → (Back to Head)
