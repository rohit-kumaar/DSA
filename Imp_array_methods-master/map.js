import { ages } from "./data.js";

console.log(`Original ages: ${ages}`);

const newAges = ages.map((element) => {
  return element * 2;
});

console.log(`Twice the age: ${newAges}`);

// comment 2nd
const emp = [
  { name: "Rohit", location: "Mumbai", salary: 25000 },
  { name: "Vikas", location: "Mumbai", salary: 15000 },
  { name: "Ruturaj", location: "Delhi", salary: 23000 },
  { name: "Kumar", location: "Chennai", salary: 55000 },
  { name: "Yash", location: "Mumbai", salary: 45000 },
  { name: "Raj", location: "Delhi", salary: 28000 },
];

// 2. Add new field named 'active' and it's value will  be true|false based on below condition
// 		value:true - location should not be chennai else value:false

console.log("%cforEach", `color:red`);
emp.forEach(
  (element) => (element.status = "active" && element.location != "Chennai")
);
console.log(emp);

console.log(`%c1st - map reverse condition`, `color:blue`);
emp.map(
  (element) => element.location != "Chennai" && (element.status = "active")
);
console.log(emp);

console.log(`%c2nd - map reverse condition`, `color:green`);
emp.map(
  (element) => (element.status = "active" && element.location != "Chennai")
);
console.log(emp);

let k = emp.map((element) => {
  return element.name.toUpperCase();
});

console.log(k);
