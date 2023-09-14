// 1991. Find the Middle Index in Array

function middleIndex(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = 1; j <= arr.length - 1; j++) {
      let rightValue = arr[j] + arr[j + 1];
      console.log(rightValue);
    }
  }
}

const arr = [2, 3, -1, 8, 4];
const result = middleIndex(arr);
console.log(result);
