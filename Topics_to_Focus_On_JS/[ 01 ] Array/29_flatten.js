const number = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
const result = [];

function flatter(arr) {
  for (const num of arr) {
    console.log(num);

    if (Array.isArray(num)) {
      flatter(num);
    } else {
      result.push(num);
    }
  }
}

flatter(number);

console.log(result);
