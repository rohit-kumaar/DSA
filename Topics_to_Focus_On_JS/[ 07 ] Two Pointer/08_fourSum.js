function fourSum(arr, target) {
  arr.sort((a, b) => a - b);
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) break;
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > 0) break;
      if (j > i + 1 && arr[j] === arr[j - 1]) continue;

      let lo = j + 1;
      let hi = arr.length - 1;

      while (lo < hi) {
        let sum = arr[i] + arr[j] + arr[lo] + arr[hi];

        if (sum === target) {
          answer.push([arr[i], arr[j], arr[lo], arr[hi]]);
          lo++;
          hi--;

          while (lo < hi && arr[lo] === arr[lo - 1]) {
            lo++;
          }

          while (lo < hi && arr[hi] === arr[hi + 1]) {
            hi--;
          }
        } else if (sum < target) {
          lo++;
        } else {
          hi--;
        }
      }
    }
  }

  return answer;
}

const arr = [1, 0, -1, 0, -2, 2];
const target = 0;
const res = fourSum(arr, target);
console.log(res);
