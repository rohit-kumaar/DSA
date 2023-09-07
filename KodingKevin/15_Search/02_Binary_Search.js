function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let midValue = arr[mid];

    if (midValue === target) {
      return mid; // Return the index of the target element if found
    } else if (midValue < target) {
      left = mid + 1; // Adjust the left boundary
    } else {
      right = mid - 1; // Adjust the right boundary
    }
  }

  return -1; // Return -1 if the target element is not found in the array
}

// Example usage:
const sortedArray = [3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
const targetElement = 11;
const result = binarySearch(sortedArray, targetElement);

if (result !== -1) {
  console.log(`Element ${targetElement} found at index ${result}.`);
} else {
  console.log(`Element ${targetElement} not found in the array.`);
}
