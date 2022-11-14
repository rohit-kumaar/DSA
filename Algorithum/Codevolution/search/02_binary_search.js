// Binary search only applicable in shorted array.

/* Creating an array of numbers. */
const array = [2, 4, 10, 30, 28, 35, 41, 96, 2];

/* Sorting the array in ascending order. */
array.sort((a, b) => a - b);

const binarySearch = (array, target) => {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === array[middleIndex]) return middleIndex;

    // target < array[middleIndex]
    //   ? (rightIndex = middleIndex - 1)
    //   : (leftIndex = middleIndex + 1);

    if (target < array[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
};

console.log(binarySearch(array, 30));
