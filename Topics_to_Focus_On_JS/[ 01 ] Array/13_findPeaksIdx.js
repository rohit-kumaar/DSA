function findPeaksIdx(arr) {
  // base case
  if (arr.length < 3) return [];

  const peaks = [];
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      peaks.push(i);
    }
  }

  return peaks;
}

const mountain = [1, 4, 3, 8, 5];
const res = findPeaksIdx(mountain);
console.log(res);
