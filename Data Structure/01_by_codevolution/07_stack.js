/*
Reference :-
https://www.oreilly.com/library/view/data-structures-and/9781449373931/ch04.html
 */
class Stack {
  constructor() {
    this.items = [];
    this.top = 0;
  }

  push(element) {
    return (this.items[this.top++] = element);
  }

  pop() {
    return this.items[--this.top];
  }

  peek() {
    return this.items[this.top - 1];
  }

  size() {
    console.log(this.top);
  }

  print() {
    console.log(this.items);
  }
}

const stack = new Stack();
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
console.log(stack);
stack.size();
stack.pop();
stack.pop();
console.log(stack);
stack.push(7);
stack.push(8);
console.log("peek", stack.peek());
