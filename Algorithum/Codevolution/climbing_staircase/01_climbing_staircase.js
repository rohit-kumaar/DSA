const climbingStaircase = (n) => {
  const noOfWays = [1, 2];

  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }

  return noOfWays[n - 1];
};

console.log("climbingStaircase", climbingStaircase(1));
console.log("climbingStaircase", climbingStaircase(2));
console.log("climbingStaircase", climbingStaircase(3));
console.log("climbingStaircase", climbingStaircase(4));
console.log("climbingStaircase", climbingStaircase(5));

// Big-O = O(n)
