const arr = [4, 3, 2, 1, 0];

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) minIdx = j;
    }

    if (minIdx !== i) [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
  }
}

selectionSort(arr);
console.log(arr);
