const arr = [6, 2, 8, 4, 10, 1];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let outerLoop = arr.length - 1; // for debugging
    let swapped = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      let innerLoop = arr.length - 1 - i; // for debugging

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
}

const result = bubbleSort(arr);
console.log(result);
