class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  push(data) {
    this.items.push(data);
  }

  pop() {
    if (this.isEmpty()) "Stack is empty";
    return this.items.pop();
  }

  peek() {
    return this.isEmpty()
      ? "Stack is empty"
      : this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  print() {
    return this.items;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.print());

stack.pop();
console.log(stack.print());

console.log(stack.peek());
console.log(stack.size());
