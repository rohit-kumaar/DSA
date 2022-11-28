let arr = [1, 2, 3, 4, 5];
const newEl = 3000;
const position = 2;

for (let i = arr.length - 1; i >= 0; i--) {
  if (i >= position) {
    arr[i + 1] = arr[i];
    if (i == position) arr[i] = newEl;
  }
}

console.log("arr", arr);
