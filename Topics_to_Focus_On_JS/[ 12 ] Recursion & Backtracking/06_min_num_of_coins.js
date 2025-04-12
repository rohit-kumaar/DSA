function minCoinsRecursive(coins, amount, memo = {}) {
  if (amount === 0) return 0; // Base case: 0 coins needed for amount 0

  if (amount < 0) return Infinity; // If amount become negative return infinity

  if (memo[amount] !== undefined) {
    return memo[amount]; // Memoization check
  }

  let minCoins = Infinity;

  for (let coin of coins) {
    let subResult = minCoinsRecursive(coins, amount - coin, memo);
    if (subResult !== Infinity) {
      minCoins = Math.min(minCoins, subResult + 1);
    }
  }

  memo[amount] = minCoins;
  return minCoins;
}

// Example Usage:
console.log(minCoinsRecursive([1, 2, 5], 5)); // Output: 1 (5 )
console.log(minCoinsRecursive([1, 2, 5], 11)); // Output: 3 (5 + 5 + 1)
console.log(minCoinsRecursive([2], 3)); // Output: -1 (not possible)
console.log(minCoinsRecursive([9, 6, 1], 11)); // Output: 3 (6 + 6)
