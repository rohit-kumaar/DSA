// 1991. Find the Middle Index in Array

// function middleIndex(arr) {
//   for (let i = 0; i <= arr.length - 1; i++) {
//     for (let j = 1; j <= arr.length - 1; j++) {
//       let rightValue = arr[j] + arr[j + 1];
//       console.log(rightValue);
//     }
//   }
// }

// const arr = [2, 3, -1, 8, 4];
// const result = middleIndex(arr);
// console.log(result);
// =======================================================================
// 2677. Chunk Array
// Input: arr = [], size = 1
// Output: []

// Input: arr = [8,5,3,2,6], size = 6
// Output: [[8,5,3,2,6]]

// Input: arr = [1,9,6,3,2], size = 3
// Output: [[1,9,6],[3,2]]

function chunkArray(arr, size) {
  let chunkBox = [];

  for (let i = 0; i < arr.length; i = i + size) {
    chunkBox.push(arr.slice(i, i + size));
  }

  return chunkBox;
}

const arr = [1, 9, 6, 3, 2];
const size = 1;
const result = chunkArray(arr, size);
console.log(result);
