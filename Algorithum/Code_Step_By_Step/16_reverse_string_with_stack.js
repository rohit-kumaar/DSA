let array = [];
let arrayLength = array.length;

function push(value) {
  array[arrayLength] = value;
  arrayLength++;
}

function pop() {
  if (arrayLength > 0) {
    let removedValue = array[arrayLength - 1];
    arrayLength--;
    array.length = arrayLength;
    return removedValue;
  } else {
    console.log(`Stack is already empty`);
  }
}

function reverseString(string) {
  for (let i = 0; i < string.length; i++) {
    push(string[i]);
  }

  for (let i = 0; i < string.length; i++) {
    string[i] = pop();
  }
}

let string = "rohit";
string = string.split("");
reverseString(string);

console.log(string.join(""));
// console.log(array);



// =================== Call by reference concept ===================

// let refArray = [20];

// function callByRefFunc(refArray) {
//   refArray[0] = 300;
// }

// callByRefFunc(refArray);
// console.log(refArray); // ONLY ARRAY AND OBJECT
