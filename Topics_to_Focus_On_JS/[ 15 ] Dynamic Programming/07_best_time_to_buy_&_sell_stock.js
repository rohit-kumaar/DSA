function maxProfit(price) {
  if (!price || price.length < 2) return 0;

  let minPrice = price[0];
  let maxProfit = 0;

  for (let i = 1; i < price.length; i++) {
    let currProfit = price[i] - minPrice;
    maxProfit = Math.max(maxProfit, currProfit);
    minPrice = Math.min(minPrice, price[i]);
  }

  return maxProfit;
}

const price = [7, 1, 5, 3, 6, 4];
const res = maxProfit(price);
console.log(res);
