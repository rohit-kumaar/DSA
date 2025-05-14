function threeSum(a) {
  const arr = a.sort((a, b) => a - b);
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) break;
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let lo = i + 1;
    let hi = arr.length - 1;

    while (lo < hi) {
      let sum = arr[i] + arr[lo] + arr[hi];
      if (sum === 0) {
        answer.push([arr[i], arr[lo], arr[hi]]);
        lo++;
        hi--;

        while (lo < hi && arr[lo] === arr[lo - 1]) {
          lo++;
        }

        while (lo < hi && arr[hi] === arr[hi + 1]) {
          hi--;
        }
      } else if (sum < 0) {
        lo++;
      } else {
        hi--;
      }
    }
  }

  return answer;
}

const arr = [-1, 0, 1, 2, -1, -4];
const res = threeSum(arr);
console.log(res);
