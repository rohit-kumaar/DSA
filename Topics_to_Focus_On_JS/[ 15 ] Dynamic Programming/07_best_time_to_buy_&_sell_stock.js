function maxProfit(price) {
  if (!price || price.length < 2) return 0;

  let buyPrice = price[0];
  let profit = 0;

  for (let i = 1; i < price.length; i++) {
    let sellPrice = price[i];
    if (buyPrice > sellPrice) {
      buyPrice = sellPrice;
    }
    profit = Math.max(profit, sellPrice - buyPrice);
  }

  return profit;
}

const price = [7, 1, 5, 3, 6, 4];
const res = maxProfit(price);
console.log(res);
