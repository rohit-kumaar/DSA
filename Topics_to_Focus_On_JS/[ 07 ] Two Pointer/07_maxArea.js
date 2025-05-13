function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    let w = right - left;
    let h = Math.min(height[left], height[right]);
    let area = w * h;
    maxArea = Math.max(maxArea, area);

    height[left] < height[right] ? left++ : right--;
  }
  return maxArea;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const res = maxArea(height);
console.log(res);
