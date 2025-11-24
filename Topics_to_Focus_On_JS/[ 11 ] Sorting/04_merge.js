function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  // Create a temporary array once
  const temp = new Array(arr.length);

  // Start the recursive sorting
  function sort(start, end) {
    if (start >= end) return;

    const mid = Math.floor((start + end) / 2);

    sort(start, mid); // sort left
    sort(mid + 1, end); // sort right
    merge(start, mid, end); // merge them
  }

  function merge(start, mid, end) {
    let i = start;
    let j = mid + 1;
    let k = start;

    // Copy current range to temp
    for (let p = start; p <= end; p++) {
      temp[p] = arr[p];
    }

    // Merge from temp back to arr
    while (i <= mid && j <= end) {
      if (temp[i] <= temp[j]) {
        arr[k++] = temp[i++];
      } else {
        arr[k++] = temp[j++];
      }
    }

    while (i <= mid) {
      arr[k++] = temp[i++];
    }

    // No need for last while(j <= end) — already in place in temp
    // But we don't need to copy remaining right part — it's already in arr
  }

  sort(0, arr.length - 1);
  return arr;
}

const arr = [5, 3, 8, 1];
mergeSort(arr);
console.log(arr);
