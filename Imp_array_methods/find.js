import { companies } from "./data.js";

console.log(companies);
const find = companies.find((element) => element.category === "Auto");
console.log(find);
