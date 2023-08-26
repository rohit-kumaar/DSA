// - Directions
// Write a function that splits an array (first argument)
// into groups the length of size (second argument) and
// returns them as a two-dimensional array.
// Examples
// chunk ( ["a", "b", "c", "d"], 2) [[ "a", "b"], ["c", "d"]]
// chunk ( [0, 1, 2, 3, 4, 5], 4) [[0, 1, 2, 3], [4, 5]]

const arr = ["a", "b", "c", "d"];
const arrChunkSize = 2;

const chunk = (array, size) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const last = result[result.length - 1];

    if (!last || last.length === size) {
      result.push([item]);
    } else {
      last.push(item);
    }
  }

  return result;
};

console.log(chunk(arr, arrChunkSize));
