const arr = [5, 7, -2, 10, 22, -2, 0, 5, 22, 1];
const sortedUniqueArr = Array.from(new Set(arr)).sort((a, b) => a - b);
const search = 10;

console.log(sortedUniqueArr);

function binarySearch(arr, search) {
  let start = 0;
  let end = arr.length - 1;

  while (end >= start) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === search) return mid;
    search > arr[mid] ? (start = mid + 1) : (end = mid - 1);
  }

  return -1;
}

const result = binarySearch(sortedUniqueArr, search);
console.log(
  result !== -1 ? `Found at index ${result} after sorting ` : "Not Found"
);
