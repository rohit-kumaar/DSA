import { ages, companies } from "./data.js";

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);
console.log(`Total sum of array: ${combined}`);

// sum all start years
let k = companies
  .map((element) => element.start)
  .reduce((prev, curr) => prev + curr, 0);
console.log(k);
