let arr = [];
let currentLength = arr.length;
let maxLength = 5;

function push(value) {
  if (currentLength >= maxLength) {
    console.log(`You can't add ${value} because stack is full`);
  }

  arr[currentLength] = value;
  currentLength++;
}

function pop() {
  if (currentLength > 0) {
    currentLength--;
    arr.length = currentLength;
  } else {
    console.log(`The stack is already empty`);
  }
}

push(25);
push(26);
push(27);
push(28);
push(29);
push(30);
push(60);
push(90);
pop();
pop();
pop();

console.log(arr);
