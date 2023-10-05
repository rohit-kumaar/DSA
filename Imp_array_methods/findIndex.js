import { companies } from "./data.js";

console.log(companies);
const find = companies.findIndex((element) => element.category === "Auto");
console.log(find);
