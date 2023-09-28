// LIFO
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

  print() {
    return this.items;
  }
}

let stack = new Stack();
stack.push(35);
stack.push(36);
console.log(stack.print());
console.log(stack);
stack.pop();
console.log(stack);

let r = 10;
// console.log(r);
// console.log(r++);
// console.log(r);
// console.log(++r);
// console.log(r--);
// console.log(r);
// console.log(--r);

// console.log(r++);
// console.log(r += 1);
// console.log(r = r + 1);
// console.log(++r);

let a = 5; // 00000000000000000000000000000101
let b = 3; // 00000000000000000000000000000010

// console.log(a, b);

// let temp = a;
// a = b;
// b = temp;
// console.log(a, b);

// [b, a] = [a, b];
// console.log(a, b);

let users = {
  firstName: "Rohit",
  lastName: "Kumar",
};


// console.log(Object.keys(users));
// console.log(Object.values(users));
// console.log(Object.entries(users));



// let result = {};

// function name1() {
//   for (const key in users) {
//     result[users[key]] = key;
//   }

//   return result;
// }

// console.log(name1());

// console.log(users);
