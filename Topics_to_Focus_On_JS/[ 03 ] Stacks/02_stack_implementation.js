class Stack {
  constructor(len) {
    this.len = len;
    this.arr = new Array(len);
    this.top = -1;
  }

  push(element) {
    if (this.len - 1 > this.top) {
      this.top++;
      this.arr[this.top] = element;
    } else {
      console.log("Stack Overflow");
    }
  }

  pop() {
    if (this.top >= 0) {
      this.top--;
    } else {
      console.log("Stack Underflow");
    }
  }

  peek() {
    if (this.top >= 0) {
      return this.arr[this.top];
    } else {
      console.log("Stack is Empty");
      return -1;
    }
  }

  isEmpty() {
    if (this.top == -1) {
      return true;
    } else {
      return false;
    }
  }
}

const st = new Stack(5);
st.push(4);
st.push(10);

console.log(st.peek());

st.pop();
console.log(st.peek());
st.pop();
console.log(st.peek());
