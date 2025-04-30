function coinChange(myCoins, amount) {
  myCoins.sort((a, b) => a - b);
  const coins = new Array(amount + 1).fill(Infinity);
  coins[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let myCoin of myCoins) {
      if (myCoin > i) break;
      coins[i] = Math.min(coins[i], coins[i - myCoin] + 1);
    }
  }

  return coins[amount] === Infinity ? -1 : coins[amount];
}

console.log(coinChange([1, 4, 5], 12)); // Output: 3 (4 + 4 + 4 )
console.log(coinChange([1, 2, 5], 5)); // Output: 1 (5 )
console.log(coinChange([1, 2, 5], 11)); // Output: 3 (5 + 5 + 1)
console.log(coinChange([2], 3)); // Output: -1 (not possible)
console.log(coinChange([9, 6, 1], 11)); // Output: 3 (6 + 6)
