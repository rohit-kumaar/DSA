const array = [2, 4, 10, 30, 28, 35, 41, 96, 2];
array.sort((a, b) => a - b);

const recursiveBinarySearch = (arr, target) => {
  return search(arr, target, 0, arr.length - 1);
};

const search = (arr, target, leftIndex, rightIndex) => {
  const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (leftIndex > rightIndex) return -1;
  if (target === arr[middleIndex]) return middleIndex;

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, rightIndex - 1);
  } else {
    return search(arr, target, leftIndex + 1, rightIndex);
  }
};

console.log(recursiveBinarySearch(array, 35));
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); // 4
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)); // 3
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)); // -1

// Big-O = O(1)
