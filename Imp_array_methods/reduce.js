import { ages } from "./data.js";

console.log(ages);
const sumOfArray = ages.reduce((pre, cur) => pre + cur, 0);
console.log(sumOfArray);
