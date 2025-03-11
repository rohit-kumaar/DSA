const arr = [5, 7, -2, 10, 22, -2, 0, 5, 22, 1];
const uniqueArr = [...new Set(arr)];
const sortedUniqueArr = uniqueArr.sort((a, b) => a - b);
const length = sortedUniqueArr.length - 1;
const search = 10;

console.log(uniqueArr);
console.log(length);

function binarySearch(arr, length, search) {
  let start = 0;
  let end = length;

  while (end >= start) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === search) return mid;
    search > arr[mid] ? (start = mid + 1) : (end = mid - 1);
  }

  return -1;
}

const result = binarySearch(sortedUniqueArr, length, search);
console.log(result !== -1 ? `Found at index ${result}` : "Not Found");
