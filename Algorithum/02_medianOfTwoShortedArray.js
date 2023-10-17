

function medianOfTwoShortedArray(arr1, arr2) {
  const arr3 = [...arr1, ...arr2];
  arr3.sort((a, b) => a - b);
  let index;
  let median;
  let size = arr3.length;

  for (let i = 0; i < size; i++) {
    if (size % 2 === 0) {
      index = size / 2;
      median = (arr3[index] + arr3[index - 1]) / 2;
    } else {
      index = (size + 1) / 2;
      median = arr3[index - 1];
    }
  }

  return median;
}

const arr1 = [1, 2];
const arr2 = [3, 4];

const result = medianOfTwoShortedArray(arr1, arr2);
console.log(result);
