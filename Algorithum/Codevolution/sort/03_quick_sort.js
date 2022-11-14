let array = [8, 20, -2, 4, -6];

const quickSort = (arr) => {
  const pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  if (arr.length < 2) return arr;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort(array)); // [-6, -2, 4, 8, 20]

// Worst case - O(n^2)
// Avg case - O(n logn)
