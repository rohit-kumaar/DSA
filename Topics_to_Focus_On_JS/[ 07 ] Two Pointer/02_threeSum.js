function threeSum(a) {
  const arr = a.sort((a, b) => a - b);
  const len = arr.length;
  const answer = [];

  for (let i = 0; i < len; i++) {
    if (arr[i] > 0) break;
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let lo = i + 1;
    let hi = len - 1;

    while (lo < hi) {
      let sum = arr[i] + arr[lo] + arr[hi];
      if (sum === 0) {
        answer.push([arr[i], arr[lo], arr[hi]]);
        lo = lo + 1;
        hi = hi - 1;

        while (lo < hi && arr[lo] === arr[lo - 1]) {
          lo = lo + 1;
        }

        while (lo < hi && arr[hi] === arr[hi + 1]) {
          hi = hi - 1;
        }
      } else if (sum < 0) {
        lo = lo + 1;
      } else {
        hi = hi - 1;
      }
    }
  }

  return answer;
}

const arr = [-1, 0, 1, 2, -1, -4];
const res = threeSum(arr);
console.log(res);
