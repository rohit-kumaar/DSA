const array = [];
let arrayLength = array.length;
const arrayMaxLength = 5;

function enqueue(value) {
  if (arrayLength >= arrayMaxLength) {
    console.log("Queue is full");
  } else {
    array[arrayLength] = value;
    arrayLength++;
  }
}

function dequeue() {
  if (arrayLength > 0) {
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i + 1];
    }
    arrayLength--;
    array.length = arrayLength;
  } else {
    console.log("Queue is already empty");
  }
}

function display() {
  console.log(array);
}

enqueue(1);
enqueue(2);
enqueue(3);
enqueue(4);
enqueue(5);
// enqueue(6);
// enqueue(60);
dequeue();
dequeue();
dequeue();
dequeue();
dequeue();
dequeue();
display();
