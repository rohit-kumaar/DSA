// const arr = [1, 2, 3, 5, 6, 7];
// const position = 3;
// const newElement = 4;

// for (let i = arr.length - 1; i >= 0; i--) {
//   if (i >= position) {
//     arr[i + 1] = arr[i];
//     if (i === position) arr[i] = newElement;
//   }
// }

// console.log(arr);

// let numbers = [1, 2, 3, 4, 5];
// let newNumber = 6;
// let indexToInsert = 2;

// numbers[numbers.length] = 0; // add a placeholder element at the end
// for (let i = numbers.length - 1; i > indexToInsert; i--) {
//   numbers[i] = numbers[i - 1]; // shift elements to the right
// }
// numbers[indexToInsert] = newNumber; // insert the new number

// console.log(numbers); // Output: [1, 2, 6, 3, 4, 5]

// let array1 = [1, 2, 8, 4, 5];
// let array2 = [6, 7, 3, 9, 10];
// let result = [];
// let array1Index = 0;
// let array2Index = 0;
// let resultIndex = 0;

// while (array1Index < array1.length && array2Index < array2.length) {
//   if (array1[array1Index] < array2[array2Index]) {
//     result[resultIndex] = array1[array1Index];
//     array1Index++;
//     resultIndex++;
//   } else {
//     result[resultIndex] = array2[array2Index];
//     array2Index++;
//     resultIndex++;
//   }
// }

// while (array2Index < array2.length) {
//   result[resultIndex] = array2[array2Index];
//   array2Index++;
//   resultIndex++;
// }

// console.log(result);

let arr = [];
let currentLength = arr.length;
let maxLength = 5;

function push(value) {
  if (currentLength >= maxLength) return console.log(`Stack is full`);

  arr[currentLength] = value;
  currentLength++;
}

function pop() {
  if (currentLength > 0) {
    currentLength--;
    arr.length = currentLength;
  } else {
    console.log(`Stack is empty`);
  }
}

push(25);
push(26);
push(27);
push(28);
push(29);
push(30);
push(31);
pop()
pop()
pop()
pop()
pop()
pop()

console.log(arr);
