let money = 100;
let apple = 0;

function buyApple(params) {
  if (params > 0) {
    console.log(`I have ${params} Rs. and i have ${apple} apples`);
    buyMoreApple(params);
  } else {
    console.log(`I have ${params} amount of money. so i cant buy apple`);
  }
}

function buyMoreApple(params) {
  apple++;
  buyApple(params - 10);
}

buyApple(money);
