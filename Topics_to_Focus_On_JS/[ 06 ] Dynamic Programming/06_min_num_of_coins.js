function minCoinsDP(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // Base case: 0 coins for amount 0

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

// Example Usage:
console.log(minCoinsDP([1, 2, 5], 5)); // Output: 1 (5 )
console.log(minCoinsDP([1, 2, 5], 11)); // Output: 3 (5 + 5 + 1)
console.log(minCoinsDP([2], 3)); // Output: -1 (not possible)
console.log(minCoinsDP([9, 6, 1], 11)); // Output: 3 (6 + 6)
