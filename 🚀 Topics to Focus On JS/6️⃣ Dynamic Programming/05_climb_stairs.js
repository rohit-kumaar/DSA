function climbStairs(totalStairs) {
  if (totalStairs <= 2) return totalStairs;

  let stair1 = 1;
  let stair2 = 2;

  for (let i = 3; i <= totalStairs; i++) {
    let currStair = stair1 + stair2;
    stair1 = stair2;
    stair2 = currStair;
  }

  return stair2;
}

const res = climbStairs(5);
console.log(res);
