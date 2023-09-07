function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index of the target element if found
    }
  }
  return -1; // Return -1 if the target element is not found in the array
}

// Example usage:
const array = [5, 10, 15, 20, 25, 30];
const targetElement = 15;
const result = linearSearch(array, targetElement);

if (result !== -1) {
  console.log(`Element ${targetElement} found at index ${result}.`);
} else {
  console.log(`Element ${targetElement} not found in the array.`);
}
