/* Creating an array of numbers. */
const array = [2, 4, 10, 30, 28, 35, 41, 96, 2];

/**
 * It loops through the array and returns the index of the target if it's found, otherwise it returns
 * -1
 * @param array - the array to search through
 * @param target - The number you're looking for
 * @returns The index of the target number in the array.
 */
const linerSearchIndex = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
  // return array.indexOf(number); //OR
};
console.log(linerSearchIndex(array, 35));

/**
 * For each element in the array, check if it is equal to the target. If it is, return true. If it
 * isn't, return false.
 * @param array - The array to search through
 * @param target - The value you're looking for
 * @returns a boolean value.
 */
const linerSearchIncludes = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return true;
  }
  return false;
  // return array.includes(number); //OR
};
console.log(linerSearchIncludes(array, 35));
