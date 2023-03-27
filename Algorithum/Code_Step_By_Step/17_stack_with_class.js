class Stack {
  array = [];
  arrayLength;
  arrayMaxLength;

  constructor(size) {
    this.arrayMaxLength = size;
    this.arrayLength = this.array.length;
  }

  push(value) {
    if (this.arrayLength >= this.arrayMaxLength) {
      console.log("Stack is full");
    } else {
      this.array[this.arrayLength] = value;
      this.arrayLength++;
    }
  }

  pop() {
    if (this.arrayLength > 0) {
      this.arrayLength--;
      this.array.length = this.arrayLength;
    } else {
      console.log("Stack is already empty");
    }
  }

  print() {
    console.log(this.array);
  }
}

let stack = new Stack(5);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.pop();
stack.print();
