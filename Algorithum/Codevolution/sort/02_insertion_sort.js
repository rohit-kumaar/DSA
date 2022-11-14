let array = [8, 20, -2, 4, -6];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
};

insertionSort(array);
console.log(array); // [-6, -2, 4, 8, 20]

// Big-O = O(n^2) quadratic
